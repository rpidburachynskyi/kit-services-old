import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { CodemirrorComponent } from '@ctrl/ngx-codemirror';

@Component({
  selector: 'app-code-wrapper',
  templateUrl: './code-wrapper.component.html',
  styleUrls: ['./code-wrapper.component.scss']
})
export class CodeWrapperComponent implements OnInit {

  @Input("type") _type: 'js' | 'regexp' = 'js';
  @Input("viewOnly") _viewOnly: Boolean = false;

  @Input("code") code: string = "";
  @Input("readOnly") readOnly: Boolean = false;

  @Output("codeChange") codeChange = new EventEmitter<string>();

  @ViewChild("codeMirror", { static: true }) private _codeMirror: CodemirrorComponent;

  get codeMirror(): CodeMirror.EditorFromTextArea { return this._codeMirror.codeMirror };

  constructor() { }

  ngOnInit() {
  }

  onCodeChange(code: string) {
    this.codeChange.emit(code);
  }
}
