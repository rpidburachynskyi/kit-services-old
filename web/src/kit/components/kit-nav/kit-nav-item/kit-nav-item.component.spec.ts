import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitNavItemComponent } from './kit-nav-item.component';

describe('KitNavItemComponent', () => {
  let component: KitNavItemComponent;
  let fixture: ComponentFixture<KitNavItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitNavItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
