import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignCleanComponent } from './design-clean.component';

describe('DesignCleanComponent', () => {
  let component: DesignCleanComponent;
  let fixture: ComponentFixture<DesignCleanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignCleanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignCleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
