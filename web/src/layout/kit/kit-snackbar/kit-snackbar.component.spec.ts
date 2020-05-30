import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitSnackbarComponent } from './kit-snackbar.component';

describe('KitSnackbarComponent', () => {
  let component: KitSnackbarComponent;
  let fixture: ComponentFixture<KitSnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitSnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
