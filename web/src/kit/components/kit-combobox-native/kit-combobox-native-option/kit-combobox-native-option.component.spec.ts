import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitComboboxNativeOptionComponent } from './kit-combobox-native-option.component';

describe('KitComboboxNativeOptionComponent', () => {
  let component: KitComboboxNativeOptionComponent;
  let fixture: ComponentFixture<KitComboboxNativeOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitComboboxNativeOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitComboboxNativeOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
