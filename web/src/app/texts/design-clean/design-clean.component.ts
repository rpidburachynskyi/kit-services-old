import { Component, OnInit } from '@angular/core';
import { DesignCleanService } from './design-clean.service';

declare let CodeMirror: any;

@Component({
  selector: 'app-design-clean',
  templateUrl: './design-clean.component.html',
  styleUrls: ['./design-clean.component.scss']
})
export class DesignCleanComponent implements OnInit {

  hasOutput: boolean = false;
  inputOutputIndex: number = 0;
  inputText: any;
  lastInputText: string;
  lastOutputText: string;

  constructor(private designClean: DesignCleanService) {
    this.designClean.resultText$.subscribe(result => {
      if(this.inputText) {
        this.hasOutput = true;
        this.lastInputText = this.inputText.getValue();
        this.inputText.setValue(result);
        this.inputOutputIndex = 1;
      }
    });
  }

  ngOnInit() {
    this.inputText = CodeMirror(document.getElementById("design-clean-input-text"), {
      lineNumbers: true,
      mode: { name: "javascript", json: true },
      value: `<div>
      
      Hello
      
      </div>`
    });
  }

  onCleanClick() {
    this.designClean.setHTMLText(this.inputText.getValue());
  }

  onClickInput() {
    this.inputOutputIndex = 0;
    this.lastOutputText = this.inputText.getValue();
    this.inputText.setValue(this.lastInputText);
  }

  onClickOutput() {
    this.inputOutputIndex = 1;
    this.lastInputText = this.inputText.getValue();
    this.inputText.setValue(this.lastOutputText);
  }
}
