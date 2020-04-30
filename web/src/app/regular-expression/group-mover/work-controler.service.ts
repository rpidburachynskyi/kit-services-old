import { Injectable, Inject, forwardRef } from '@angular/core';
import { GroupMoverService } from './group-mover.service';
import { ResultControlerService } from './result-controler.service';
import { BehaviorSubject } from 'rxjs';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

export interface iWork {
	id: number,
	localId?: number,
	globalId?: number,
	name: string,
	regExpPattern: string,
	textPattern,
	eachFunctionPattern,
	globalFunctionPattern,
	argumentsPattern
};

export interface iWorkExtend extends iWork {
	hasInLocal: Boolean,
	hasInGlobal: Boolean
}

@Injectable({
	providedIn: 'root'
})
export class WorkControlerService {

	private _currentWork$: BehaviorSubject<iWork>;

	resultController: ResultControlerService;

	currentWorkId: number = -1;

	works: iWork[] = [
		{
			id: -1,
			name: "Custom",
			regExpPattern: "",
			textPattern: "",
			eachFunctionPattern: "",
			globalFunctionPattern: "",
			argumentsPattern: ""
		}
	]

	get currentWork(): iWorkExtend {
		const work: iWork = this.currentWork$.getValue();
		return {
			...work,
			hasInGlobal: work.globalId !== undefined,
			hasInLocal: work.localId !== undefined
		}
	}
	get currentWork$(): BehaviorSubject<iWork> { return this._currentWork$; }

	constructor(
		private apollo: Apollo
	) {
		this._currentWork$ = new BehaviorSubject<iWork>(this.works.find(w => w.id === this.currentWorkId));

		//this.loadWorksFromLocal();
		this.loadWorksFromGlobal();
	}

	loadWorksFromLocal() {
		for (let i = 0; i < localStorage.length; i++) {
			const key = localStorage.key(i);
			if (key.startsWith("WORKS")) {
				// const id = /WORKS_(\d+)/.exec(key).groups[1];
				const work: iWork = JSON.parse(localStorage.getItem(key));
				this.works.push(work);
			}
		}
	}

	loadWorksFromGlobal() {
		this.apollo.watchQuery({
			query: getGroupMoversQuery,
		}).valueChanges.subscribe(({ data: { currentUser: { groupMovers } } }: any) => {
			let works: iWork[] = this.works.filter(w => w.globalId === undefined);

			this.works = works.map((w, index) => ({ ...w, id: index }));
		});
	}

	setWork(id: number) {
		const workIndex = this.works.findIndex(w => w.id === id);

		if (workIndex === -1) throw new Error("Unknmown identifier");

		this.currentWork$.next(this.works.find(w => w.id === this.currentWorkId));
	}

	add = (name: string = "",
		regExpPattern: string = "",
		textPattern: string = "",
		eachFunctionPattern: string = "",
		globalFunctionPattern: string = "",
		argumentsPattern: string = ""): iWork => {
		const id = this.works.length;
		const work: iWork = { id, name, regExpPattern, argumentsPattern, eachFunctionPattern, globalFunctionPattern, textPattern };

		this.works.push(work);

		this._currentWork$.next(work);

		return work;
	}

	saveCurrentToLocal = (work: iWork) => {
		localStorage.setItem(`WORKS_${work.id}`, JSON.stringify(work));
	}

	saveCurrentToGlobal = ({ regExpPattern, eachFunctionPattern, globalFunctionPattern, argumentsPattern }: iWork) => {
		this.apollo.mutate({
			mutation: saveMutation,
			variables: {
				regExpPattern,
				eachFunction: eachFunctionPattern,
				globalFunction: globalFunctionPattern,
				argumentsPattern: argumentsPattern
			}
		}).subscribe(o => {
			console.log(o);
		});
	}

	removeFromLocal = (id: number) => {

		if (this.currentWork.id === id) {
			this._currentWork$.next(this.works[0]);
		}

		this.works = this.works.filter(w => w.id !== id);
		localStorage.removeItem(`WORKS_${id}`);
	}

	removeFromGlobal = (id: number) => {

	}
}

const saveNewMutation = gql`
mutation saveGroupMover(
	$name: String!
	$regExpPattern: String!
	$eachFunction: String!
	$globalFunction: String!
	$argumentsPattern: String!
  ) {
	saveGroupMover(
	  name: $name
	  regExpPattern: $regExpPattern
	  textPattern: ""
	  eachFunction: $eachFunction
	  globalFunction: $globalFunction
	  argumentsPattern: $argumentsPattern
	) {
	  id
	  regExpPattern
	  textPattern
	}
  }
  
  `;

const saveMutation = gql`
mutation saveGroupMover(
	$regExpPattern: String!
	$eachFunction: String!
	$globalFunction: String!
	$argumentsPattern: String!
  ) {
	saveGroupMover(
	  id: 0
	  regExpPattern: $regExpPattern
	  textPattern: ""
	  eachFunction: $eachFunction
	  globalFunction: $globalFunction
	  argumentsPattern: $argumentsPattern
	) {
	  id
	  regExpPattern
	  textPattern
	}
  }
  
  `;

const getGroupMoversQuery = gql`
query {
	currentUser {
		id
		groupMovers {
			id
			name
			regExpPattern
			textPattern
			eachFunction
			globalFunction
			argumentsPattern
		}
	}
  }
  
`;