import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitTabComponent } from './kit-tab.component';

describe('KitTabComponent', () => {
  let component: KitTabComponent;
  let fixture: ComponentFixture<KitTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
