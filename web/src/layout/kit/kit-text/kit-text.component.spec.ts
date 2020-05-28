import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitTextComponent } from './kit-text.component';

describe('KitTextComponent', () => {
  let component: KitTextComponent;
  let fixture: ComponentFixture<KitTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
