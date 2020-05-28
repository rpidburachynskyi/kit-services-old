import { Component, OnInit, Input } from '@angular/core';

export type KitTextTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';
export type KitTextType = 'title' | 'subtitle' | 'text';

@Component({
  selector: 'kit-text',
  templateUrl: './kit-text.component.html',
  styleUrls: ['./kit-text.component.scss']
})
export class KitTextComponent implements OnInit {

  @Input("text") text: string = "";
  @Input("type") type: KitTextTags | KitTextType = 'text';
  @Input("align") align: 'left' | 'center' | 'right' = 'left';

  constructor() { }

  ngOnInit() {
  }

}
