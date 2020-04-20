import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { GroupMoverService } from '../group-mover.service';
import { ActivatedRoute } from '@angular/router';
import { CodemirrorComponent } from '@ctrl/ngx-codemirror';
import { TextMarker } from 'codemirror';
import { debounce } from 'debounce';
import { ResultControlerService } from '../result-controler.service';
import { WorkControlerService } from '../work-controler.service';

@Component({
  selector: 'app-input-patterns',
  templateUrl: './input-patterns.component.html',
  styleUrls: ['./input-patterns.component.scss']
})
export class InputPatternsComponent implements OnInit {
  private markers: TextMarker[] = [];

  get regExpPattern(): string { return this.workController.currentWork.regExpPattern; }
  set regExpPattern(value: string) { this.workController.currentWork.regExpPattern = value; }

  get textPattern(): string { return this.workController.currentWork.textPattern; }
  set textPattern(value: string) { this.workController.currentWork.textPattern = value; }
  
  @ViewChild("textCM", { static: true }) textCM: CodemirrorComponent;
  @ViewChild("regExpCM", { static: true }) regExpCM: CodemirrorComponent;


  constructor(
    private resultController: ResultControlerService,
    private workController: WorkControlerService,
    private activated: ActivatedRoute
  ) { }

  ngOnInit() {
    this.setRegExpPattern();
    this.setTextPattern();

    this.resultController.matches$.subscribe((matches) => {

      if(!matches || !this.textCM.codeMirror) return;

      this.markers.forEach(m => m.clear());
      this.markers = [];

      let index = 0;

      const groupColors = [
        "red",
        "green",
        "yellow",
        "blue",
        "gray"
      ]

      matches.forEach(match => {
        match.forEach((v, i) => {
          if(!v) return;
            const nextIndex = this.textPattern.indexOf(v, index);
            
            const start = this.textCM.codeMirror.posFromIndex(nextIndex),
              end = this.textCM.codeMirror.posFromIndex(nextIndex + v.length);
  
            this.markers.push(this.textCM.codeMirror.markText(start, end, { css: `background-color: ${groupColors[i]}`}));
            index = nextIndex;
        });
      });
    });
  }

  setRegExpPattern = debounce(this.resultController.processMatches, 400);
  setTextPattern = debounce(this.resultController.processMatches, 400);
}