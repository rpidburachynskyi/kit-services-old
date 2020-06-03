import { TestBed } from '@angular/core/testing';

import { CryptoWasmService } from './crypto-wasm.service';

describe('CryptoWasmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CryptoWasmService = TestBed.get(CryptoWasmService);
    expect(service).toBeTruthy();
  });
});
