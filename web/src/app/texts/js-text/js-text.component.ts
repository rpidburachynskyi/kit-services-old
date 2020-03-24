import { Component, OnInit } from '@angular/core';
import { JsTestService } from './js-test.service';

declare let CodeMirror: any;
declare let Split: any;

@Component({
  selector: 'app-js-text',
  templateUrl: './js-text.component.html',
  styleUrls: ['./js-text.component.scss']
})
export class JsTextComponent implements OnInit {

  inputText: any;
  outputText: any;

  functionText: any;

  constructor(private jsTest: JsTestService) {
  }

  ngOnInit() {
    this.inputText = CodeMirror(document.getElementById("JSText-inputText"), {
      lineNumbers: true,
      mode: { name: "javascript", json: true },
      value: "AA"
    });

    this.outputText = CodeMirror(document.getElementById("JSText-outputText"), {
      lineNumbers: true,
      mode: { name: "javascript", json: true },
      value: "AA"
    });

    this.functionText = CodeMirror(document.getElementById("JSText-functionText"), {
      lineNumbers: true,
      mode: { name: "javascript", json: true },
      value: "AA"
    });

    this.jsTest.outputText$.subscribe(output => {
      this.outputText.setValue(output);
    });

    Split([".input-text", ".function-text", ".output-text"], { sizes: [20, 60, 20], direction: "vertical" });
    //this.setInputText();
  }

  setInputText() {
    this.jsTest.setInputText(this.inputText.getValue());
  }

  setFunctionText() {
    this.jsTest.setFunctionText(this.functionText.getValue());
  }
}
