import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'kit-expansion-panel',
  templateUrl: './kit-expansion-panel.component.html',
  styleUrls: ['./kit-expansion-panel.component.scss'],

  animations: [
    trigger("content", [
      state("opened", style({
        height: "*",
        padding: "10px"
      })),
      state("closed", style({
        height: 0,
        padding: "0 10px"
      })),
      transition("opened => closed", animate("200ms")),
      transition("closed => opened", animate("200ms", keyframes([
        style({ transform: "translateY(-110px)", height: '0' }),
        style({ transform: "translateY(0)", height: '*' }),
      ])))
    ]),
    trigger("element", [
      state("opened", style({
        height: "*"
      })),
      state("closed", style({
        height: 0
      })),
      transition("opened => closed", animate("200ms")),
      transition("closed => opened", animate("200ms", keyframes([
        style({ transform: "translateY(110px)", height: '0' }),
        style({ transform: "translateY(0)", height: '*' }),
      ])))
    ])
  ],
})
export class KitExpansionPanelComponent implements OnInit {

  opened: boolean = false;

  @Input("title") title: string = "";
  @Input("scroll") scroll: boolean = true;
  @Input("disabled") disabled: boolean = false;

  @HostBinding("attr.disabled") _disabled: boolean = false;

  constructor() { }

  ngOnInit() {
    this._disabled = this.disabled;
  }

  onClickHeader() {
    if (!this.disabled)
      this.opened = !this.opened;
  }

}
