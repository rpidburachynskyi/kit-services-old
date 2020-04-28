import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitTextFieldComponent } from './kit-text-field.component';

describe('KitTextFieldComponent', () => {
  let component: KitTextFieldComponent;
  let fixture: ComponentFixture<KitTextFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitTextFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitTextFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
