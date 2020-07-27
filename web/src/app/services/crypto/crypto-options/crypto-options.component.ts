import { Component, EventEmitter, Output, Input } from "@angular/core";
import { IEncryptOptions } from "../models/EncryptOptions";
import { IDecryptOptions } from "../models/DecryptOptions";
import { CryptoMethods } from "../models/CryptoMethods.enum";

@Component({
	selector: "app-crypto-options",
	templateUrl: "./crypto-options.component.html",
	styleUrls: ["./crypto-options.component.scss"],
})
export class CryptoOptionsComponent {
	private encryptOptions: IEncryptOptions = {
		method: CryptoMethods.XOR,
		key: "",
	};
	private decryptOptions: IDecryptOptions = {
		method: CryptoMethods.XOR,
		key: "",
	};

	private get operation(): IEncryptOptions | IDecryptOptions {
		return this.encryption ? this.encryptOptions : this.decryptOptions;
	}

	private emitChange(): void {
		if (this.encryption)
			this.encryptOptionsChange.emit(this.encryptOptions);
		else this.decryptOptionsChange.emit(this.decryptOptions);
	}

	@Input("encrypting") encryption: boolean = true;

	@Output("encryptOptionsChange") encryptOptionsChange = new EventEmitter<
		IEncryptOptions
	>();

	@Output("decryptOptionsChange") decryptOptionsChange = new EventEmitter<
		IDecryptOptions
	>();

	set method(methodString: string) {
		let method;

		switch (methodString) {
			case "xor":
				method = CryptoMethods.XOR;
				break;
			case "rsa":
				method = CryptoMethods.RSA;
				break;
			default:
				throw new Error("Unknown crypto method");
		}

		if (this.encryption) {
			this.encryptOptions.method = method;
		} else {
			this.decryptOptions.method = method;
		}
	}

	get method(): string {
		switch (this.operation.method) {
			case CryptoMethods.XOR:
				return "xor";
			case CryptoMethods.RSA:
				return "rsa";
		}
	}

	set key(key: string) {
		if (this.operation.method !== CryptoMethods.XOR)
			throw new Error("Set key in bad method");
		this.operation.key = key;
		this.emitChange();
	}

	get key(): string {
		if (this.operation.method !== CryptoMethods.XOR)
			throw new Error("Get key in bad method");
		return this.operation.key;
	}

	set firstPrime(prime: number) {
		if (this.operation.method !== CryptoMethods.RSA)
			throw new Error("Set firstPrime in bad method");
		this.operation.q = prime;
		this.emitChange();
	}

	get firstPrime(): number {
		if (this.operation.method !== CryptoMethods.RSA)
			throw new Error("Get firstPrime in bad method");
		return this.operation.p;
	}

	set secondPrime(prime: number) {
		if (this.operation.method !== CryptoMethods.RSA)
			throw new Error("Set secondPrime in bad method");
		this.operation.p = prime;
		this.emitChange();
	}

	get secondPrime(): number {
		if (this.operation.method !== CryptoMethods.RSA)
			throw new Error("Get secondPrime in bad method");
		return this.operation.q;
	}
}
