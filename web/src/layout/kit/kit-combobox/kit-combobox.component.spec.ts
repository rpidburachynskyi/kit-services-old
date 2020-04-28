import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitComboboxComponent } from './kit-combobox.component';

describe('KitComboboxComponent', () => {
  let component: KitComboboxComponent;
  let fixture: ComponentFixture<KitComboboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitComboboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitComboboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
