import { Component, OnInit, QueryList, ContentChildren, HostListener, Input } from '@angular/core';
import { KitComboboxOptionComponent } from '../kit-combobox-option/kit-combobox-option.component';

@Component({
  selector: 'kit-combobox-option-group',
  templateUrl: './kit-combobox-option-group.component.html',
  styleUrls: ['./kit-combobox-option-group.component.scss']
})
export class KitComboboxOptionGroupComponent implements OnInit {

  @ContentChildren(KitComboboxOptionComponent) _options: QueryList<KitComboboxOptionComponent>;

  @HostListener("click", ["$event"]) onClick(e: Event) { }

  @Input("title") _title: string = "";

  constructor() { }

  ngOnInit() {
  }

}
