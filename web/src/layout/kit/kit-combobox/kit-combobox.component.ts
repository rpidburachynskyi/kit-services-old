import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { iKitComboboxOption } from '../../models/iKitComboboxOption.model';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-kit-combobox',
  templateUrl: './kit-combobox.component.html',
  styleUrls: ['./kit-combobox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => KitComboboxComponent),
      multi: true
    }
  ]
})
export class KitComboboxComponent implements ControlValueAccessor {

  @Input("options") options: iKitComboboxOption[];

  private _value: string;

  public get myValue(): string { return this._value; };

  public set myValue(value: string) {
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
  setDisabledState(isDisabled: boolean) {
    throw new Error("Method not implements");
  }
  writeValue(value: string) {
    this.myValue = value;
  }
}
