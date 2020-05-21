import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitInputFileComponent } from './kit-input-file.component';

describe('KitInputFileComponent', () => {
  let component: KitInputFileComponent;
  let fixture: ComponentFixture<KitInputFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitInputFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitInputFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
