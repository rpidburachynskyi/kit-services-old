import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'kit-text-field',
  templateUrl: './kit-text-field.component.html',
  styleUrls: ['./kit-text-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => KitTextFieldComponent),
      multi: true
    }
  ]
})
export class KitTextFieldComponent implements ControlValueAccessor {

  private _value: string;

  public get myValue(): string { return this._value; };

  public set myValue(value: string) {
    if (value === this._value) return;

    this._value = value;
    this.onChange(value);
  };

  @Input("password") _password: boolean = false;

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
    throw new Error("Method not implements");
  }
  writeValue(value: string) {
    this.myValue = value;
  }

}
