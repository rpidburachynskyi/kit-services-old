import { Component, forwardRef } from '@angular/core';
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

  private _value: Boolean;
  private _disabled: Boolean = false;

  get disabled(): Boolean { return this._disabled; }

  public get myValue(): Boolean { return this._value; };

  public set myValue(value: Boolean) {
    if (value === this._value) return;

    this._value = value;
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
    this.myValue = value;
  }

}
