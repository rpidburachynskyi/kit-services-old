import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kit-tab',
  templateUrl: './kit-tab.component.html',
  styleUrls: ['./kit-tab.component.scss']
})
export class KitTabComponent implements OnInit {

  @Input("label") label: string = "";

  constructor() { }

  ngOnInit() {
  }

}
