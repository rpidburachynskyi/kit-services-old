import { Component, OnInit } from "@angular/core";
import { FilesService } from "./files.service";
import { IDecryptOptions } from "../models/DecryptOptions";
import { IEncryptOptions } from "../models/EncryptOptions";

@Component({
	selector: "app-files",
	templateUrl: "./files.component.html",
	styleUrls: ["./files.component.scss"],
})
export class FilesComponent implements OnInit {
	set encryptOptions(options: IEncryptOptions) {
		this._files.encryptOptions = options;
	}
	set decryptOptions(options: IDecryptOptions) {
		this._files.decryptOptions = options;
	}

	get files(): File[] {
		return this._files.files;
	}
	set files(files: File[]) {
		this._files.files = files;
	}

	get encrypting(): boolean {
		return this._files.whatToDo === "encrypt";
	}

	get buttonLabel(): string {
		return (
			this._files.whatToDo[0].toUpperCase() +
			this._files.whatToDo.substring(1)
		);
	}

	constructor(private _files: FilesService) {}

	ngOnInit() {}

	onDoClick() {
		if (this._files.whatToDo === "encrypt") {
			this._files.encrypt();
		} else {
			this._files.decrypt();
		}
	}
}
