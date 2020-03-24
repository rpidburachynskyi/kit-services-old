import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsTextComponent } from './js-text.component';

describe('JsTextComponent', () => {
  let component: JsTextComponent;
  let fixture: ComponentFixture<JsTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
