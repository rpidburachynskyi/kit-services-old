import { Injectable } from "@angular/core";
import { CryptoService } from "../crypto.service";
import { FileSaverService } from "ngx-filesaver";
import { CryptoMethods } from "../models/CryptoMethods.enum";
import { WhatToDo } from "../models/WhatToDo";
import { iEncryptParams } from "../models/iEncryptParams";
import { DataStream, Buffer } from "@kit2/data-stream";
import { IDecryptParams } from "../models/iDecryptParams";
import { IXOREncrypt } from "../models/EncryptOptions/iXOREncrypt";
import { IRSAEncrypt } from "../models/EncryptOptions/IRSAEncrypt";
import { IXORDecrypt } from "../models/DecryptOptions/iXORDecrypt";
import { IRSADecrypt } from "../models/DecryptOptions/IRSADecrypt";

const VERSION = 1; // change when changed algorithm for write and read

@Injectable({
	providedIn: "root",
})
export class FilesService {
	files: File[] = [];

	whatToDo: WhatToDo = "encrypt";

	allInOne: Boolean = false;

	encryptOptions: IXOREncrypt | IRSAEncrypt;
	decryptOptions: IXORDecrypt | IRSADecrypt;

	outputFileName: string = "";

	totalObject: Object = [];

	constructor(
		private crypto: CryptoService,
		private fileSaver: FileSaverService
	) {}

	private async _writeEncryptData(
		ds: DataStream,
		file: File,
		version: number
	) {
		const data = await this._readFile(file);
		ds.writeString(file.name);
		ds.writeUint8Array(data);
	}

	private _readEncryptData(ds: DataStream, version: number) {
		const fileName = ds.readString();
		const d = ds.readUint8Array();
		this._save(d, fileName);
	}

	async encrypt() {
		const ds = new DataStream();
		ds.writeUint16(VERSION);
		ds.writeUint8(this.files.length);

		this.files.forEach(async (file, index) => {
			await this._writeEncryptData(ds, file, VERSION);

			if (index === this.files.length - 1) {
				this._save(
					this.crypto.encrypt(
						ds.buffer.toUint8Array(),
						this.encryptOptions
					),
					this.outputFileName
				);
			}
		});
	}

	async decrypt() {
		this.files.forEach(async (file, index) => {
			const data = await this._readFile(file);
			const ds = new DataStream(
				Buffer.fromUint8Array(
					this.crypto.decrypt(data, this.decryptOptions)
				)
			);
			const version = ds.readUint16();
			const size = ds.readUint8();

			for (let i = 0; i < size; i++) {
				this._readEncryptData(ds, version);
			}
		});
	}

	private _readFile(file: File): Promise<Uint8Array> {
		return new Promise((resolve) => {
			const reader = new FileReader();
			reader.onload = async () => {
				if (reader.result instanceof ArrayBuffer)
					resolve(new Uint8Array(reader.result));
				else throw new Error("");
			};
			reader.readAsArrayBuffer(file);
		});
	}

	private _save(array: Uint8Array, fileName: string) {
		const blob = new Blob([array]);
		this.fileSaver.save(blob, fileName);
	}
}
