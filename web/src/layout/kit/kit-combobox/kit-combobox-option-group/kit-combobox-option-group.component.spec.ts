import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitComboboxOptionGroupComponent } from './kit-combobox-option-group.component';

describe('KitComboboxOptionGroupComponent', () => {
  let component: KitComboboxOptionGroupComponent;
  let fixture: ComponentFixture<KitComboboxOptionGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitComboboxOptionGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitComboboxOptionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
