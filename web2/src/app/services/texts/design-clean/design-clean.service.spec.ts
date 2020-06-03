import { TestBed } from '@angular/core/testing';

import { DesignCleanService } from './design-clean.service';

describe('DesignCleanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DesignCleanService = TestBed.get(DesignCleanService);
    expect(service).toBeTruthy();
  });
});
