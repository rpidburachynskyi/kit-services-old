import { Injectable } from '@angular/core';
import { CryptoService } from '../crypto.service';
import { FileSaverService } from 'ngx-filesaver';
import { DencryptMethods } from '../models/DencryptMethods.enum';
import { WhatToDo } from '../models/WhatToDo';
import { iDencryptParams } from '../models/iDencryptParams';

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

	totalBuffer: Uint8Array = new Uint8Array();

	constructor(
		private crypto: CryptoService,
		private fileSaver: FileSaverService
	) {

	}

	async do() {
		if (this.key === "") {
			throw new Error("Key cannot be empty")
		};

		const params: iDencryptParams = {
			key: this.key,
			method: this.method
		};


		this.files.forEach((file, index) => {
			const reader = new FileReader();
			reader.onload = async () => {
				if (reader.result instanceof ArrayBuffer) {
					let whatToDoFunc;

					switch (this.whatToDo) {
						case "encrypt": whatToDoFunc = this.crypto.encrypt; break;
						case "decrypt": whatToDoFunc = this.crypto.decrypt; break;
						// case "rencrypt": whatToDoFunc = this.crypto; break;
					}

					const buffer = await whatToDoFunc(reader.result, params)
					this._save(buffer, index);
				}
			};
			reader.readAsArrayBuffer(file);
		});
	}

	private _save(buffer: Uint8Array, index: number) {
		if (this.allInOne) {
			this.totalBuffer = new Uint8Array([...this.totalBuffer, ...buffer]);

			if (index === this.files.length - 1) {
				const blob = new Blob([new Uint8Array(this.totalBuffer, 0, this.totalBuffer.byteLength)]);;
				this.fileSaver.save(blob, this.outputFileName)
			}
		} else {
			const blob = new Blob([new Uint8Array(buffer, 0, buffer.byteLength)]);;
			this.fileSaver.save(blob, this.outputFileName);
		}
	}
}
