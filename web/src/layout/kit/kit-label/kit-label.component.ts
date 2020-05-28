import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kit-label',
  templateUrl: './kit-label.component.html',
  styleUrls: ['./kit-label.component.scss']
})
export class KitLabelComponent implements OnInit {

  @Input("text") text: string = "";

  constructor() { }

  ngOnInit() {
  }

}
