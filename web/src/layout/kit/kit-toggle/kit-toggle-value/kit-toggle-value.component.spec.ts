import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitToggleValueComponent } from './kit-toggle-value.component';

describe('KitToggleValueComponent', () => {
  let component: KitToggleValueComponent;
  let fixture: ComponentFixture<KitToggleValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitToggleValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitToggleValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
