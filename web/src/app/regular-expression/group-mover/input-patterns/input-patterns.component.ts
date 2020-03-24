import { Component, OnInit, ViewChild, Input, ElementRef  } from '@angular/core';
import { GroupMoverService } from '../group-mover.service';

declare let CodeMirror: any;

@Component({
  selector: 'app-input-patterns',
  templateUrl: './input-patterns.component.html',
  styleUrls: ['./input-patterns.component.scss']
})
export class InputPatternsComponent implements OnInit {
  // @ViewChild("regExp", { static: true }) regExpInput : ElementRef;
  // @ViewChild("movePattern", { static: true }) movePatternInput : ElementRef;

  regExpPattern:string = "Question\\s+(\\d+)\\s-\\s(.*[:?])\\s*.*\\s.*\\s*.*!\\w\\)(.*)";
  textPattern: any;


  constructor(private groupMover : GroupMoverService) {
  }

  ngOnInit() {
    this.textPattern = CodeMirror(document.getElementById("text-pattern"), {
      value: `Question 1 - What is your name? 
  !a) Rostik
  b)Roman
  c)Ruslan
Question 2 - What are you years old? 
  a)18
  !b)19
  c)20`
    });
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
