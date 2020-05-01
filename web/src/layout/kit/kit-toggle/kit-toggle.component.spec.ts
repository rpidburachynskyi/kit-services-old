import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitToggleComponent } from './kit-toggle.component';

describe('KitToggleComponent', () => {
  let component: KitToggleComponent;
  let fixture: ComponentFixture<KitToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
