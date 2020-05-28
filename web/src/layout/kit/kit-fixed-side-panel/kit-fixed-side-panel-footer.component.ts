import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kit-fixed-side-panel-footer',
  template: "<ng-content></ng-content>",
  styles: [':host { display: flex; }']
})
export class KitFixedSidePanelFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
