import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GroupMoverService } from '../group-mover.service';
import { CodeError } from './code-error.model';
import { ActivatedRoute } from '@angular/router';
import { GroupMoverExample } from 'src/app/models/services/regular-expression/examples/group-mover-example.model';

declare let CodeMirror: any;

@Component({
  selector: 'app-input-result-pattern',
  templateUrl: './input-result-pattern.component.html',
  styleUrls: ['./input-result-pattern.component.scss']
})
export class InputResultPatternComponent implements OnInit {
  @ViewChild("eachCode", { static: false }) eachCode: ElementRef;

  eachFunctionErrors: CodeError[] = [];

  globalFunctionText: string = `// this function call with all groups
  function (groups)) {
  return args[0] + "it works"
  }`;

  argumentsText: string = "";

  tabIndex: number = 0;

  eachCodeMirror: any;
  globalCodeMirror: any;
  argumentsCodeMirror: any;

  constructor(
    private groupMover: GroupMoverService,
    private activated: ActivatedRoute
    ) {
    this.groupMover.resultEachFunctionErrors$.subscribe(errors => {
      this.eachFunctionErrors = errors;
    });
  }

  ngOnInit() {
    this.eachCodeMirror = CodeMirror(document.getElementById('inputEachFunction'), {
      lineNumbers: true,
      mode: { name: "javascript", json: true },
      value: this.groupMover.example.resultEach
    });
    this.globalCodeMirror = CodeMirror(document.getElementById('inputGlobalFunction'), {
      lineNumbers: true,
      mode: { name: "javascript", json: true },
      value: this.groupMover.example.resultGlobal
    });
    this.argumentsCodeMirror = CodeMirror(document.getElementById("inputArgumentsCode"), {
      lineNumbers: true,
      mode: { name: "javascript", json: true },
      value: this.groupMover.example.resultArguments
    });

    switch(this.groupMover.example.type) {
      case "each": this.setEachFunctionText(); break;
      case "global": this.setGlobalFunctionText(); break;
      case "args": this.setArgumentsText(); break;
    }
  }

  setEachFunctionText() {
    const value = this.eachCodeMirror.getValue();
    this.groupMover.setResultEachFunctionText(value);
  }

  setGlobalFunctionText() {
    const value = this.globalCodeMirror.getValue();
    this.groupMover.setResultGlobalFunctionText(value);
  }

  setArgumentsText() {
    const value = this.argumentsCodeMirror.getValue();
    this.groupMover.setResultArgumentsText(value);
  }

  changeTab(index: number) {
    this.tabIndex = index;

    switch(index) {
      case 0: this.setEachFunctionText(); break;
      case 1: this.setGlobalFunctionText(); break;
      case 2: this.setArgumentsText(); break;
    }
  }
}
