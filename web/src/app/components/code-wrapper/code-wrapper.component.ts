import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-code-wrapper',
  templateUrl: './code-wrapper.component.html',
  styleUrls: ['./code-wrapper.component.scss']
})
export class CodeWrapperComponent implements OnInit {

  @Input("code") code: string = "";
  @Input("readOnly") readOnly: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
