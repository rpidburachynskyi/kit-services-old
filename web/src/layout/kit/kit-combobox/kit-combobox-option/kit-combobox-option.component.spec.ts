import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitComboboxOptionComponent } from './kit-combobox-option.component';

describe('KitComboboxOptionComponent', () => {
  let component: KitComboboxOptionComponent;
  let fixture: ComponentFixture<KitComboboxOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitComboboxOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitComboboxOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
