import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CodemirrorComponent } from '@ctrl/ngx-codemirror';
import { ResultControlerService } from '../result-controler.service';
import { WorkControlerService } from '../work-controler.service';

declare let CodeMirror: any;

@Component({
	selector: 'app-input-result-pattern',
	templateUrl: './input-result-pattern.component.html',
	styleUrls: ['./input-result-pattern.component.scss']
})
export class InputResultPatternComponent implements OnInit {
	@ViewChild("eachCodeCM", { static: false }) eachCodeCM: CodemirrorComponent;
	@ViewChild("globalCodeCM", { static: false }) globalCodeCM: CodemirrorComponent;
	@ViewChild("argumentsCM", { static: false }) argumentsCM: CodemirrorComponent;

	get eachCodePattern(): string { return `function(match, index) {\n\t${this.workController.currentWork.eachFunctionPattern}\n}`; }
	set eachCodePattern(pattern: string) {
		this.workController.currentWork.eachFunctionPattern = 
			/function\(match, index\) {\n\t(((\s*)|.*)*)\n}$/.exec(pattern)[1];
	}

	get globalCodePattern(): string { return `function(matches) {\n\t${this.workController.currentWork.globalFunctionPattern}\n}`; }
	set globalCodePattern(pattern: string) { 
		if(!pattern.startsWith('function')) return;
		this.workController.currentWork.globalFunctionPattern = 
			/function\(matches\) {\n\t(((\s*)|.*)*)\n}$/.exec(pattern)[1];
	};

	get argumentsPattern(): string { return this.workController.currentWork.argumentsPattern };
	set argumentsPattern(pattern: string) { this.workController.currentWork.argumentsPattern = pattern; };

	tabIndex: number = 0;

	constructor(
		private resultController: ResultControlerService,
		private workController: WorkControlerService,
		private activated: ActivatedRoute
	) { }

	ngOnInit() {
		setTimeout(() => {	
			this.eachCodeCM.codeMirror.on("beforeChange", (instance, obj) => {
				if(obj.from.line === 0 || obj.from.line === instance.lastLine()) obj.cancel();
			});
			this.eachCodeCM.codeMirror.markText(
				{ line: 0, ch: 0 },
				this.eachCodeCM.codeMirror.posFromIndex(26),
				{ readOnly: true }
			);
			this.eachCodeCM.codeMirror.markText(
				this.eachCodeCM.codeMirror.posFromIndex(26),
				this.eachCodeCM.codeMirror.posFromIndex(28),
				{ readOnly: true }
			);
			
			this.globalCodeCM.codeMirror.on("beforeChange", (instance, obj) => {
				if(obj.from.line === 0 || obj.from.line === instance.lastLine()) obj.cancel();
			});
			this.globalCodeCM.codeMirror.markText(
				this.globalCodeCM.codeMirror.posFromIndex(0),
				this.globalCodeCM.codeMirror.posFromIndex(21),
				{ readOnly: true }
			);
				
			this.globalCodeCM.codeMirror.markText(
				this.globalCodeCM.codeMirror.posFromIndex(21),
				this.globalCodeCM.codeMirror.posFromIndex(23),
				{ readOnly: true }
			);
		}, 1000);
	}

	setEachFunctionText() {
		this.resultController.processEach();
	}

	setGlobalFunctionText() {
		this.resultController.processGlobal();
	}

	setArgumentsText() {
		this.resultController.processArguments();
	}

	changeTab(index: number) {
		this.tabIndex = index;

		switch (index) {
			case 0: this.setEachFunctionText(); break;
			case 1: this.setGlobalFunctionText(); break;
			case 2: this.setArgumentsText(); break;
		}
	}
}
