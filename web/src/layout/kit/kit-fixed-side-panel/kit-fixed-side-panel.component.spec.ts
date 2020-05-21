import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitFixedSidePanelComponent } from './kit-fixed-side-panel.component';

describe('KitFixedSidePanelComponent', () => {
  let component: KitFixedSidePanelComponent;
  let fixture: ComponentFixture<KitFixedSidePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitFixedSidePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitFixedSidePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
