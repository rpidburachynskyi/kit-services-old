import { Injectable } from '@angular/core';

import * as Module from './crypto-wasm-source/crypto-wasm/crypto-wasm.js';
import '!!file-loader?name=crypto-wasm-source/crypto-wasm/crypto-wasm.wasm!./crypto-wasm-source/crypto-wasm/crypto-wasm.wasm';
import { filter, map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: "root"
})
export class CryptoWasmService {
  module: any

  wasmReady = new BehaviorSubject<boolean>(false)

  constructor() {
    this.instantiateWasm('crypto-wasm-source/crypto-wasm/crypto-wasm.wasm');
    this.xor_encrypt("", "s").subscribe(console.log);
  }

  private async instantiateWasm(url: string) {
    // fetch the wasm file
    const wasmFile = await fetch(<string>(url));

    // convert it into a binary array
    const buffer = await wasmFile.arrayBuffer();
    const binary = new Uint8Array(buffer);

    // create module arguments
    // including the wasm-file
    const moduleArgs = {
      wasmBinary: binary,
      onRuntimeInitialized: () => {
        this.wasmReady.next(true) // <-- this line
      },
    }
    // instantiate the module
    this.module = Module(moduleArgs);
    console.log(this.module);
  }

  public xor_encrypt(data: string, key: string): Observable<number> {
    return this.wasmReady.pipe(filter(value => value === true)).pipe(
      map(() => {
        return this.module._fibonacci(10);
      })
    );
  }
}
