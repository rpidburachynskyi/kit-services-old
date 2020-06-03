import { TestBed } from '@angular/core/testing';

import { MinimizerService } from './minimizer.service';

describe('MinimizerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MinimizerService = TestBed.get(MinimizerService);
    expect(service).toBeTruthy();
  });
});
