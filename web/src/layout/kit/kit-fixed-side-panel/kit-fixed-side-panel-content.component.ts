import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kit-fixed-side-panel-content',
  template: "<ng-content></ng-content>"
})
export class KitFixedSidePanelContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
