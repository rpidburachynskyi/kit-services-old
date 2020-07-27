import { Injectable } from "@angular/core";
import { CryptoMethods } from "./models/CryptoMethods.enum";
import { CryptoWasmService } from "./crypto-wasm.service";
import { IDecryptOptions } from "./models/DecryptOptions";
import { IEncryptOptions } from "./models/EncryptOptions";

@Injectable({
	providedIn: "root",
})
export class CryptoService {
	constructor(private cryptoWasm: CryptoWasmService) {}

	encrypt(buffer: Uint8Array, params: IEncryptOptions) {
		switch (params.method) {
			case CryptoMethods.XOR:
				if (params.key === "") {
					throw new Error("Key cannot be empty");
				}
				return this.cryptoWasm.xor_encrypt(buffer, params.key);
			case CryptoMethods.RSA:
				return this.cryptoWasm.rsa_encrypt(buffer, params.p, params.q);
		}
	}

	decrypt(buffer: Uint8Array, params: IDecryptOptions) {
		switch (params.method) {
			case CryptoMethods.XOR:
				return this.cryptoWasm.xor_decrypt(buffer, params.key);
			case CryptoMethods.RSA:
				return this.cryptoWasm.rsa_decrypt(buffer, params.p, params.q);
		}
	}
}
