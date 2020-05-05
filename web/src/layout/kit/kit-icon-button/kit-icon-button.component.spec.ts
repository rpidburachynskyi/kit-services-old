import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitIconButtonComponent } from './kit-icon-button.component';

describe('KitIconButtonComponent', () => {
  let component: KitIconButtonComponent;
  let fixture: ComponentFixture<KitIconButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitIconButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
