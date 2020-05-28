import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kit-fixed-side-panel-header',
  template: `
  <kit-text type="subtitle">
    <ng-content></ng-content>
  </kit-text>
  `
})
export class KitFixedSidePanelHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
