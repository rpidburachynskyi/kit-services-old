import { Injectable } from "@angular/core";

import { NgWasmService } from "ng-wasm";

@Injectable({
	providedIn: "root",
})
export class CryptoWasmService extends NgWasmService {
	constructor() {
		super("CryptoModule", "crypto.js");
	}

	xor_encrypt(data: Uint8Array, key: string): Uint8Array {
		const offset = this.module._malloc(data.length);
		this.module.HEAP8.set(data, offset);
		const pointer = this.module.ccall(
			"xor_encrypt",
			"char *",
			["char*", "int", "string"],
			[offset, data.length, key]
		);
		return this.readUint8Array(pointer, data.length);
	}

	xor_decrypt = this.xor_encrypt;

	rsa_encrypt(data: Uint8Array, p: number, q: number): Uint8Array {
		const offset = this.module._malloc(data.length);
		this.module.HEAP8.set(data, offset);
		const pointer = this.module.ccall(
			"rsa_encrypt",
			"char *",
			["char*", "int", "int"],
			[offset, data.length, p, q]
		);
		return this.readUint8Array(pointer, data.length * 2);
	}

	rsa_decrypt(data: Uint8Array, p: number, q: number): Uint8Array {
		const offset = this.module._malloc(data.length);
		this.module.HEAP8.set(data, offset);
		const pointer = this.module.ccall(
			"rsa_decrypt",
			"char *",
			["char*", "int", "int"],
			[offset, data.length / 2, p, q]
		);
		return this.readUint8Array(pointer, data.length);
	}
}
