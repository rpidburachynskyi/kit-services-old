import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class MinimizerService {
	inputText: string;
	outputText$: BehaviorSubject<string>;

	constructor() {
		this.outputText$ = new BehaviorSubject<string>("");
	}

	setInputText(text: string) {
		this.inputText = text;
	}

	minimize() {}
}
