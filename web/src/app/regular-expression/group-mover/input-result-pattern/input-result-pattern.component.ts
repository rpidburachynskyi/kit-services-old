import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GroupMoverService } from '../group-mover.service';
import { CodeError } from './code-error.model';

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

  constructor(private groupMover: GroupMoverService) {
    this.groupMover.resultEachFunctionErrors$.subscribe(errors => {
      this.eachFunctionErrors = errors;
    });
  }

  ngOnInit() {
    this.eachCodeMirror = CodeMirror(document.getElementById('inputEachFunction'), {
      lineNumbers: true,
      mode: { name: "javascript", json: true },
      value: `function (match) {\n\tconsole.log(match);\n\tconst number = match[1];\n\tconst question = match[2];\n\tconst answer = match[3];\n\treturn \`\${number}) \${question} - \${answer}\\n\`;\n}`
    });
    this.globalCodeMirror = CodeMirror(document.getElementById('inputGlobalFunction'), {
      lineNumbers: true,
      mode: { name: "javascript", json: true },
      value: `function (matches) {\n\tlet result = "";\n\tfor(let i = 0; i < matches.length; i++) {\n\t\tconst match = matches[i];\n\t\tconsole.log(match);\n\t\tconst number = match[1];\n\t\tconst question = match[2];\n\t\tconst answer = match[3];\n\t\tresult += \`\${number}) \${question} - \${answer}\\n\`;\n\t}\n\treturn result;\n}`
    });
    this.argumentsCodeMirror = CodeMirror(document.getElementById("inputArgumentsCode"), {
      lineNumbers: true,
      mode: { name: "javascript", json: true },
      value: `------------------\nQuestion - %3\nAnswer - %4\n`
    });

    this.setEachFunctionText();
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
