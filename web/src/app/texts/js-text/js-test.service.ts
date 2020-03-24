import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsTestService {

  inputText: string;
  functionText: string;
  outputText$: BehaviorSubject<string>;

  constructor() {
    this.outputText$ = new BehaviorSubject<string>("");
  }

  setInputText(text: string) {
    this.inputText = text;

    this.proccessText();
  }

  setFunctionText(text: string) {
    this.functionText = text;

    this.proccessText();
  }

  proccessText() {
    const f = new Function("text", `return (${this.functionText})(text)`);
    const result = f(this.inputText);
    this.outputText$.next(typeof result === 'string' ? result : "" + result);
  }
}
