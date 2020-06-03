import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsTestService {

  inputText: string = "My custom text";
  functionText: string = "return text";
  outputText$: BehaviorSubject<string>;

  constructor() {
    this.outputText$ = new BehaviorSubject<string>("");

    this.proccessText();
  }

  proccessText = () => {
    console.log(this.inputText, this.functionText);
    const f = new Function("text", `${this.functionText}`);
    const result = f(this.inputText);
    this.outputText$.next(typeof result === 'string' ? result : "" + result);
  }
}
