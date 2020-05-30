import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitSnackbarNotificationComponent } from './kit-snackbar-notification.component';

describe('KitSnackbarNotificationComponent', () => {
  let component: KitSnackbarNotificationComponent;
  let fixture: ComponentFixture<KitSnackbarNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitSnackbarNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitSnackbarNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
