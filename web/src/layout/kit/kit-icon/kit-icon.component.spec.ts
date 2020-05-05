import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitIconComponent } from './kit-icon.component';

describe('KitIconComponent', () => {
  let component: KitIconComponent;
  let fixture: ComponentFixture<KitIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
