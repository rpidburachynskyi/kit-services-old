import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitTabsComponent } from './kit-tabs.component';

describe('KitTabsComponent', () => {
  let component: KitTabsComponent;
  let fixture: ComponentFixture<KitTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
