import { TestBed } from '@angular/core/testing';

import { KitSnackbarService } from './kit-snackbar.service';

describe('KitSnackbarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KitSnackbarService = TestBed.get(KitSnackbarService);
    expect(service).toBeTruthy();
  });
});
