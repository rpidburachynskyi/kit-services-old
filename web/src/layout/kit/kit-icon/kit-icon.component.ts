import { Component, OnInit, Input } from '@angular/core';

export type IconDirection = 'up' | 'down' | 'left' | 'right';

@Component({
  selector: 'kit-icon',
  templateUrl: './kit-icon.component.html',
  styleUrls: ['./kit-icon.component.scss']
})
export class KitIconComponent implements OnInit {

  @Input("iconLabel") _iconLabel = "";
  @Input("color") _color = "black";

  @Input("direction") _direction: IconDirection = 'up';

  constructor() { }

  ngOnInit() {
  }



  directionInDegrees(initDirection: 'up' | 'down' | 'left' | 'right' = 'up'): number {
    const directionToDegrees = (d: IconDirection): number => {
      switch (d) {
        case 'up': return 0;
        case 'right': return 90;
        case 'down': return 180;
        case 'left': return 270;
        default: throw new Error("Unknown direction");
      }
    }

    return directionToDegrees(initDirection) - directionToDegrees(this._direction);
  }
}
