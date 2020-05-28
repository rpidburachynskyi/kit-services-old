import { Injectable } from '@angular/core';
import { CryptoService } from '../crypto.service';
import { FileSaverService } from 'ngx-filesaver';
import { DencryptMethods } from '../models/DencryptMethods.enum';
import { WhatToDo } from '../models/WhatToDo';
import { iEncryptParams } from '../models/iEncryptParams';
import { DataStream, Buffer } from '@kit2/data-stream';
import { IDecryptParams } from '../models/iDecryptParams';

@Injectable({
	providedIn: 'root'
})
export class FilesService {

	files: File[] = [];

	whatToDo: WhatToDo = 'encrypt';

	allInOne: Boolean = false;
	method: DencryptMethods = DencryptMethods.XOR;
	key: string = "";

	outputFileName: string = "";

	totalObject: Object = [];

	constructor(
		private crypto: CryptoService,
		private fileSaver: FileSaverService
	) {

	}

	async encrypt() {
		if (this.key === "") {
			throw new Error("Key cannot be empty")
		};

		const params: iEncryptParams = {
			key: this.key,
			method: this.method,
		};

		const ds = new DataStream();
		ds.writeUint8(this.files.length);

		this.files.forEach(async (file, index) => {
			const data = await this.readFile(file)
			ds.writeString(file.name);
			ds.writeUint8Array(data);

			if (index === this.files.length - 1) {
				this._save(this.crypto.encrypt(new Uint8Array(ds.buffer.toUint8Array()), params), this.outputFileName, params);
			}
		});
	}

	async decrypt() {
		if (this.key === "") {
			throw new Error("Key cannot be empty")
		};

		const params: IDecryptParams = {
			key: this.key,
			method: this.method,
			fileName: this.outputFileName
		};

		this.files.forEach(async (file, index) => {
			const data = await this.readFile(file);
			const ds = new DataStream(Buffer.fromUint8Array(this.crypto.decrypt(data, params)));
			const size = ds.readUint8();
			for (let i = 0; i < size; i++) {
				const fileName = ds.readString();
				const d = ds.readUint8Array();
				this._save(d, fileName, params);
			}
		});
	}

	readFile(file: File): Promise<Uint8Array> {
		return new Promise(resolve => {
			const reader = new FileReader();
			reader.onload = async () => {
				if (reader.result instanceof ArrayBuffer)
					resolve(new Uint8Array(reader.result));
				else
					throw new Error("");
			};
			reader.readAsArrayBuffer(file);
		});
	}

	private _save(array: Uint8Array, fileName: string, params: iEncryptParams | IDecryptParams) {
		const blob = new Blob([array]);
		if ('filename' in params) {
			this.fileSaver.save(blob, fileName);
		} else {
			this.fileSaver.save(blob, fileName);
		}
	}
}
