import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitRadioGroupComponent } from './kit-radio-group.component';

describe('KitRadioGroupComponent', () => {
  let component: KitRadioGroupComponent;
  let fixture: ComponentFixture<KitRadioGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitRadioGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitRadioGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
