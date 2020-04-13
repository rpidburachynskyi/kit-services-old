import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimizerComponent } from './minimizer.component';

describe('MinimizerComponent', () => {
  let component: MinimizerComponent;
  let fixture: ComponentFixture<MinimizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinimizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinimizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
