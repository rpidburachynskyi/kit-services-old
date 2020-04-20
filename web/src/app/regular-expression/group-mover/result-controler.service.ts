import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CodeError } from './input-result-pattern/code-error.model';
import { GroupMoverExample } from 'src/app/models/services/regular-expression/examples/group-mover-example.model';
import { WorkControlerService } from './work-controler.service';

enum ProcessType {
	EachGroup,
	Global,
	Arguments
}

@Injectable({
  providedIn: 'root'
})
export class ResultControlerService {

	_workController: WorkControlerService;
	  get workController(): WorkControlerService { return this._workController; };
	  set workController(workController: WorkControlerService) { 
		  this._workController = workController;
		  workController.currentWork$.subscribe(currentWork => {
			this.proccessLast();
		  });
	  }

	matches$: BehaviorSubject<RegExpExecArray[]>;

	result$: BehaviorSubject<string>;

	processType: ProcessType;

	constructor( ) {
		this.matches$ = new BehaviorSubject<RegExpExecArray[]>([]);
		this.result$ = new BehaviorSubject<string>("");
  	}

	getMatch(index: number) {
		let match;
		const reg = new RegExp(this.workController.currentWork.regExpPattern, 'g');
		for (let i = 0; i < index; i++) {
			match = reg.exec(this.workController.currentWork.textPattern);
		}
		return match;
	}

	getMatches(): RegExpExecArray[] {
		const reg = new RegExp(this.workController.currentWork.regExpPattern, 'g');
		const matches: RegExpExecArray[] = [];
		let match: RegExpExecArray;
		let __index = 0;
		while ((match = reg.exec(this.workController.currentWork.textPattern)) && match[0] !== "" && __index++ < 1000) {
			matches.push(match);
		}
		return matches;
	}

	processMatches = () => {
		const matches = this.getMatches();
		this.matches$.next(matches);
		this.proccessLast();
	}

	processEach() {
		this.processType = ProcessType.EachGroup;
		if (this.workController.currentWork.eachFunctionPattern === "")
			return this.result$.next("");

		const matches = this.matches$.getValue();
		
		try {
			let result = "";
			matches.forEach((m, i) => {
				const f = new Function("match, index", `${this.workController.currentWork.eachFunctionPattern}`);
				result += f(m, i);
			});

			this.result$.next(result);
			//this.resultEachFunctionErrors$.next([]);
		} catch (e) {
		//this.resultEachFunctionErrors$.next([new CodeError(e)]);
		}
	}

	processGlobal() {
		this.processType = ProcessType.Global;
		if (this.workController.currentWork.globalFunctionPattern === "")
			return this.result$.next("");

		const matches = this.getMatches();
		const f = new Function("matches", `${this.workController.currentWork.globalFunctionPattern}`)
		this.result$.next(f(matches));
	}

	processArguments() {
		this.processType = ProcessType.Arguments;
		if(this.workController.currentWork.argumentsPattern === "")
			return this.result$.next("");

		let result = "";

		const matches = this.getMatches();
		matches.forEach((m) => {
			let temp = this.workController.currentWork.argumentsPattern;
			for(let i = 0; i < m.length; i++) {
				temp = temp.replace(`%${i + 1}`, m[i]);
			}
			result += temp;
		});
		this.result$.next(result);
	}
	
	proccessLast() {
		switch(this.processType) {
			case ProcessType.EachGroup: this.processEach(); return;
			case ProcessType.Global: this.processGlobal(); return;
			case ProcessType.Arguments: this.processArguments(); return;
		}
	}
}
