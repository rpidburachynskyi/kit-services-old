import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'kit-toggle',
  templateUrl: './kit-toggle.component.html',
  styleUrls: ['./kit-toggle.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => KitToggleComponent),
      multi: true
    }
  ]
})
export class KitToggleComponent implements ControlValueAccessor {

  private _checked: Boolean;
  private _disabled: Boolean = false;

  get disabled(): Boolean { return this._disabled; }

  public get checked(): Boolean { return this._checked; };
  public set checked(value: Boolean) {
    if (value === this._checked) return;

    this._checked = value;
    this.onChange(value);
  };

  constructor() { }

  onChange = (_) => { };

  private onTouched = () => { };

  registerOnChange(f: any) {
    this.onChange = f;
  }
  registerOnTouched(f: any) {
    this.onTouched = f;
  }
  setDisabledState(isDisabled: Boolean) {
    this._disabled = isDisabled;
  }
  writeValue(value: Boolean) {
    this.checked = value;
  }

}
