import { TestBed } from '@angular/core/testing';

import { JsTestService } from './js-test.service';

describe('JsTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsTestService = TestBed.get(JsTestService);
    expect(service).toBeTruthy();
  });
});
