import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitNavComponent } from './kit-nav.component';

describe('KitNavComponent', () => {
  let component: KitNavComponent;
  let fixture: ComponentFixture<KitNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
