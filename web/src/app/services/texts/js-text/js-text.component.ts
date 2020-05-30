import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { JsTestService } from './js-test.service';
import { CodemirrorComponent } from '@ctrl/ngx-codemirror';

@Component({
	selector: 'app-js-text',
	templateUrl: './js-text.component.html',
	styleUrls: ['./js-text.component.scss']
})
export class JsTextComponent implements OnInit {

	@ViewChild("inputCM", { static: true }) inputCM: CodemirrorComponent;
	@ViewChild("functionCM", { static: true }) functionCM: CodemirrorComponent;
	@ViewChild("outputCM", { static: true }) outputCM: CodemirrorComponent;

	get inputText(): string { return this.jsTest.inputText; }
	set inputText(text: string) { this.jsTest.inputText = text; }

	get outputText(): string { return this.jsTest.outputText$.getValue(); };

	get functionText(): string { return `function (text) {\n\t${this.jsTest.functionText}\n}`; }
	set functionText(text: string) {
		this.jsTest.functionText = /function \(text\) {\n\t(((\s*)|.*)*)\n}$/.exec(text)[1];
	}

	constructor(private jsTest: JsTestService) { }

	ngOnInit(): void {
		setTimeout(() => {
			this.functionCM.codeMirror.on("beforeChange", (instance, changeObj) => {
				if (changeObj.from.line === 0 || changeObj.from.line === instance.lineCount() - 1)
					changeObj.cancel();
			});
		}, 0);
	}

	proccess = this.jsTest.proccessText;
}
