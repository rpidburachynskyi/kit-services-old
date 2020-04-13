import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { GroupMoverService } from '../group-mover.service';
import { ActivatedRoute } from '@angular/router';

declare const CodeMirror: any;

@Component({
  selector: 'app-input-patterns',
  templateUrl: './input-patterns.component.html',
  styleUrls: ['./input-patterns.component.scss']
})
export class InputPatternsComponent implements OnInit {
  // @ViewChild("regExp", { static: true }) regExpInput : ElementRef;
  // @ViewChild("movePattern", { static: true }) movePatternInput : ElementRef;

  regExpPattern: string;
  textPattern: any;


  constructor(
    private groupMover: GroupMoverService,
    private activated: ActivatedRoute
  ) {

  }

  ngOnInit() {
    
    this.textPattern = CodeMirror(document.getElementById("text-pattern"), {
      value: this.groupMover.example.value,
      mode: { name: "javascript", json: true },
      matchBrackets: true,
      indentUnit: 4,
      smartIndent: true,
      tabSize: 4,
      indentWithTabs: true,
    });

    this.regExpPattern = this.groupMover.example.regularExpression;


    console.log(this.textPattern.on);
    
    setTimeout(() => {
      this.textPattern.markText({ line: 1, ch: 1}, { line: 2, ch: 3}, {css: "background-color: red"});
      
    }, 1500);
    
    this.setRegExpPattern();
    this.setTextPattern();
  }

  setRegExpPattern(): void {
    this.groupMover.setRegExpPattern(this.regExpPattern);
  }

  setTextPattern(): void {
    this.groupMover.setTextPattern(this.textPattern.getValue());
  }
}