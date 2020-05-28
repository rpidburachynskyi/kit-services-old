import { Component, OnInit, Input, OnChanges, HostBinding } from '@angular/core';

export type IconDirection = 'up' | 'down' | 'left' | 'right';

@Component({
  selector: 'kit-icon',
  templateUrl: './kit-icon.component.html',
  styleUrls: ['./kit-icon.component.scss']
})
export class KitIconComponent implements OnInit, OnChanges {

  @HostBinding("style.height") _height: string;
  @HostBinding("style.width") _width: string;

  @Input("iconLabel") _iconLabel = "";
  @Input("color") _color = "black";
  @Input("size") _size: 'small' | 'medium' | 'high' | 'stretch' | 'stretch-height' | 'stretch-width' | 'custom' = 'medium';

  @Input("direction") _direction: IconDirection = 'up';

  constructor() { }

  ngOnInit() {
    switch (this._size) {
      case 'small': this._height = '24px'; this._width = '24px'; break;
      case 'medium': this._height = '32px'; this._width = '32px'; break;
      case 'high': this._height = '48px'; this._width = '48px'; break;
      case 'stretch-height': this._height = null; this._width = "auto"; break;
      case 'stretch-width': this._height = 'auto'; this._width = null; break;
      case 'stretch-width': this._height = 'auto'; this._width = null; break;
      case 'custom': this._height = null; this._width = null; break;
      case 'stretch':
      default: this._height = '100%'; this._width = '100%'; break;
    }
  }

  ngOnChanges() {
    switch (this._size) {
      case 'small': this._height = '24px'; this._width = '24px'; break;
      case 'medium': this._height = '32px'; this._width = '32px'; break;
      case 'high': this._height = '48px'; this._width = '48px'; break;
      case 'stretch': this._height = '100%'; this._width = '100%'; break;
    }
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
