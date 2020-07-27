import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitComboboxNativeComponent } from './kit-combobox-native.component';

describe('KitComboboxNativeComponent', () => {
  let component: KitComboboxNativeComponent;
  let fixture: ComponentFixture<KitComboboxNativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitComboboxNativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitComboboxNativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
