import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DencryptParamsComponent } from './dencrypt-params.component';

describe('DencryptParamsComponent', () => {
  let component: DencryptParamsComponent;
  let fixture: ComponentFixture<DencryptParamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DencryptParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DencryptParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
