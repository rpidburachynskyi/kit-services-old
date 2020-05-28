import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitExpansionPanelComponent } from './kit-expansion-panel.component';

describe('KitExpansionPanelComponent', () => {
  let component: KitExpansionPanelComponent;
  let fixture: ComponentFixture<KitExpansionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitExpansionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
