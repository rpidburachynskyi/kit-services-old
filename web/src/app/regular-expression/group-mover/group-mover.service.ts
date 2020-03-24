import { Injectable } from '@angular/core';
import { Group } from './group.model';
import { BehaviorSubject } from 'rxjs';
import { CodeError } from './input-result-pattern/code-error.model';

enum ProcessType {
	EachGroup,
	Global,
	Arguments
}

@Injectable({
	providedIn: 'root'
})
export class GroupMoverService {
	regularExpressionPattern: string;
	textPattern: string;

	matches$: BehaviorSubject<RegExpExecArray[]>;

	resultEachFunctionText: string;
	resultEachFunctionErrors$: BehaviorSubject<CodeError[]>;

	resultGlobalFunctionText: string;
	resultArgumentsText: string;

	result$: BehaviorSubject<string>;

	processType: ProcessType;

	constructor() {
		this.matches$ = new BehaviorSubject<RegExpExecArray[]>([]);
		this.result$ = new BehaviorSubject<string>("");

		this.resultEachFunctionErrors$ = new BehaviorSubject<CodeError[]>([]);
	}

	setRegExpPattern(pattern:string) {
		this.regularExpressionPattern = pattern;
		this.processAll();
	}

	setTextPattern(pattern:string) {
		this.textPattern = pattern;
		this.processAll();
	}

	setResultEachFunctionText(text: string) {
		this.resultEachFunctionText = text;
		this.processType = ProcessType.EachGroup;
		this.processAll();
	}

	setResultGlobalFunctionText(text: string) {
		this.resultGlobalFunctionText = text;
		this.processType = ProcessType.Global;
		this.processAll();
	}

	setResultArgumentsText(text: string) {
		this.resultArgumentsText = text;
		this.processType = ProcessType.Arguments;
		this.processAll();
	}

	getMatch(index: number) {
		let match;
		const reg = new RegExp(this.regularExpressionPattern, 'g');
		for (let i = 0; i < index; i++) {
			match = reg.exec(this.textPattern);
		}
		return match;
	}

	getMatches(): RegExpExecArray[] {
		const reg = new RegExp(this.regularExpressionPattern, 'g');
		const matches: RegExpExecArray[] = [];
		let match: RegExpExecArray;
		let __index = 0;
		while ((match = reg.exec(this.textPattern)) && match[0] !== "" && __index++ < 1000) {
			matches.push(match);
		}
		if(__index > 10) console.log(matches);
		return matches;
	}

	processAll() {
		if (this.regularExpressionPattern === "")
			return;// alert("Have no regular expression");
		if (this.textPattern === "")
			return;// alert("Have no text");

		switch(this.processType) {
			case ProcessType.EachGroup: this.processEach(); return;
			case ProcessType.Global: this.processGlobal(); return;
			case ProcessType.Arguments: this.processArguments(); return;
		}
	}

	private processEach() {
		if (this.resultEachFunctionText === "")
			return;//alert("Have no function text");
		const matches = this.getMatches();
		this.matches$.next(matches);
		try {
			let result = "";
			matches.forEach((m, i) => {
				const f = new Function("match, index", `return (${this.resultEachFunctionText})(match, index)`);
				result += f(m, i);
			});

			this.result$.next(result);
			this.resultEachFunctionErrors$.next([]);
		} catch (e) {
		this.resultEachFunctionErrors$.next([new CodeError(e)]);
		}
	}

	private processGlobal() {
		if (this.resultGlobalFunctionText === "")
			return;//alert("Have no function text");

		const matches = this.getMatches();
		const f = new Function("matches", `return (${this.resultGlobalFunctionText})(matches)`)
		this.result$.next(f(matches));
	}

	private processArguments() {
		if(this.resultArgumentsText === "")
			return;
		let result = "";

		const matches = this.getMatches();
		matches.forEach((m) => {
			let temp = this.resultArgumentsText;
			for(let i = 0; i < m.length; i++) {
				temp = temp.replace(`%${i + 1}`, m[i]);
			}
			result += temp;
		});
		this.result$.next(result);
	}
}
