import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitDividerComponent } from './kit-divider.component';

describe('KitDividerComponent', () => {
  let component: KitDividerComponent;
  let fixture: ComponentFixture<KitDividerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitDividerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
