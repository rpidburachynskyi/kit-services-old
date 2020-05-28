import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitLabelComponent } from './kit-label.component';

describe('KitLabelComponent', () => {
  let component: KitLabelComponent;
  let fixture: ComponentFixture<KitLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
