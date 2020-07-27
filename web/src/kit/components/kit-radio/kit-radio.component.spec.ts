import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitRadioComponent } from './kit-radio.component';

describe('KitRadioComponent', () => {
  let component: KitRadioComponent;
  let fixture: ComponentFixture<KitRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
