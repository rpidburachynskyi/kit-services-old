import { Component, OnInit } from '@angular/core';
import { MinimizerService } from './minimizer.service';

declare let CodeMirror: any;

@Component({
  selector: 'app-minimizer',
  templateUrl: './minimizer.component.html',
  styleUrls: ['./minimizer.component.scss']
})
export class MinimizerComponent implements OnInit {

  inputText: any;
  outputText: any;
  constructor(private minimizer: MinimizerService) {

  }

  ngOnInit() {
    this.inputText = CodeMirror(document.getElementById("codes-minimizer-input"), {
      lineNumbers: true,
      value: "TEST"
    });
    
    this.outputText = CodeMirror(document.getElementById("codes-minimizer-output"), {
      lineNumbers: true
    });

    this.minimizer.outputText$.subscribe(output => {
      this.outputText.setValue(output);
    });
  }

  onMinimizeClick() {
    this.minimizer.setInputText(this.inputText.getValue());
    this.minimizer.minimize();
  }

}
