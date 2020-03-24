import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custominput',
  templateUrl: './custominput.component.html',
  styleUrls: ['./custominput.component.scss']
})
export class CustominputComponent {

  @Input() value: string;
  @Output() valueChange = new EventEmitter<string>();

  private _value: string;


  constructor() { 

  }

  onKeyUp() {
    this.valueChange.emit(this._value);
  }
}
