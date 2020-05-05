import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kit-button',
  templateUrl: './kit-button.component.html',
  styleUrls: ['./kit-button.component.scss'],

})
export class KitButtonComponent implements OnInit {

  @Input("value") value: string = "";
  @Input("disabled") disabled: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
