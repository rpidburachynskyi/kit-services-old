import { Injectable, Inject, forwardRef } from '@angular/core';
import { GroupMoverService } from './group-mover.service';
import { ResultControlerService } from './result-controler.service';
import { BehaviorSubject } from 'rxjs';

export interface iWork {
	id: string,
	name: string,
	regExpPattern: string,
	textPattern,
	eachFunctionPattern,
	globalFunctionPattern,
	argumentsPattern
};

@Injectable({
	providedIn: 'root'
})
export class WorkControlerService {

	private _currentWork$: BehaviorSubject<iWork>;

	resultController: ResultControlerService;

	currentWorkIndex: number = 0;

	works: iWork[] = [
		{
			id: "custom",
			name: "Custom",
			regExpPattern: "",
			textPattern: "",
			eachFunctionPattern: "",
			globalFunctionPattern: "",
			argumentsPattern: ""
		}
	]

	get currentWork(): iWork { return this.currentWork$.getValue(); }
	get currentWork$(): BehaviorSubject<iWork> { return this._currentWork$; }

	constructor() {
		this._currentWork$ = new BehaviorSubject<iWork>(this.works[this.currentWorkIndex]);

		this.loadWorks();
	}

	loadWorks() {
		for (let i = 0; i < localStorage.length; i++) {
			const key = localStorage.key(i);
			if (key.startsWith("WORKS")) {
				// const id = /WORKS_(\d+)/.exec(key).groups[1];
				const work: iWork = JSON.parse(localStorage.getItem(key));
				this.works.push(work);
			}
		}
	}

	setWork(id: string) {
		const workIndex = this.works.findIndex(w => w.id === id);
		console.log(this.works);
		if (workIndex === -1) throw new Error("Unknmown identifier");

		this.currentWork$.next(this.works[this.currentWorkIndex = workIndex]);
	}

	add = (name: string = "",
			regExpPattern: string = "",
			textPattern: string = "",
			eachFunctionPattern: string = "",
			globalFunctionPattern: string = "",
			argumentsPattern: string = ""): iWork => {
				const id = this.works[this.works.length - 1].id === "custom" ? "1" : `${+this.works[this.works.length - 1].id + 1}`;
			const work: iWork = { id, name, regExpPattern, argumentsPattern, eachFunctionPattern, globalFunctionPattern, textPattern };

			this.works.push(work);
			this.save(work);

			this._currentWork$.next(work);

			return work;
		}

	save(work: iWork) {
		localStorage.setItem(`WORKS_${work.id}`, JSON.stringify(work));
	}

	remove = (id: string) => {
		
		if(this.currentWork.id === id) {
			this._currentWork$.next(this.works[0]);
		}
		
		this.works = this.works.filter(w => w.id !== id);
		localStorage.removeItem(`WORKS_${id}`);
	}

	removeCurrent = () => this.remove(this.currentWork.id);

	saveCurrent = () => this.save(this.currentWork);
	saveCurrentAs = (name: string) => this.add(name); 
}
