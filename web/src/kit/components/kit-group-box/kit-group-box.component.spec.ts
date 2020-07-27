import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitGroupBoxComponent } from './kit-group-box.component';

describe('KitGroupBoxComponent', () => {
  let component: KitGroupBoxComponent;
  let fixture: ComponentFixture<KitGroupBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitGroupBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitGroupBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
