import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kit-toggle-value',
  templateUrl: './kit-toggle-value.component.html',
  styleUrls: ['./kit-toggle-value.component.scss']
})
export class KitToggleValueComponent implements OnInit {

  @Input("side") side: 'left' | 'right' = 'right';

  constructor() { }

  ngOnInit() {
  }

}
