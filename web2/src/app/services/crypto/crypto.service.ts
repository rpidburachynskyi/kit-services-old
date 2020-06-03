import { Injectable } from "@angular/core";
import { iEncryptParams } from "./models/iEncryptParams";
import { IDecryptParams } from "./models/iDecryptParams";
import { DencryptMethods } from "./models/DencryptMethods.enum";
import { CryptoWasmService } from "./crypto-wasm.service";
import { WasmService } from "src/app/providers/wasm.service";

@Injectable({
	providedIn: "root",
})
export class CryptoService {
	constructor(
		private cryptoWasm: CryptoWasmService,
		private wasm: WasmService
	) {}

	encrypt = (buffer: Uint8Array, params: iEncryptParams) => {
		switch (params.method) {
			case DencryptMethods.XOR:
				return this.xor_encrypt(buffer, params.key);
		}
	};

	decrypt(buffer: Uint8Array, params: IDecryptParams) {
		switch (params.method) {
			case DencryptMethods.XOR:
				return this.xor_decrypt(buffer, params.key);
		}
	}

	private xor_encrypt(buffer: Uint8Array, key: string) {
		let result = buffer;
		let _key = new TextEncoder().encode(key);
		for (let i = 0; i < result.byteLength; i++) {
			result[i] = result[i] ^ _key[i % _key.length];
		}
		return result;
	}

	private xor_decrypt = this.xor_encrypt;
}
