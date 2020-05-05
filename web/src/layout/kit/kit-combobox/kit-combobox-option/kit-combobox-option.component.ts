import { Component, OnInit, Input, ContentChild, ViewChild, ContentChildren, TemplateRef } from '@angular/core';
import { KitIconComponent } from '../../kit-icon/kit-icon.component';

@Component({
  selector: 'kit-combobox-option',
  templateUrl: './kit-combobox-option.component.html',
  styleUrls: ['./kit-combobox-option.component.scss']
})
export class KitComboboxOptionComponent implements OnInit {

  @Input("value") value;
  @Input("text") text;

  @ContentChild(KitIconComponent, { static: false }) icon: any;

  constructor() { }

  ngOnInit() {
  }

}
