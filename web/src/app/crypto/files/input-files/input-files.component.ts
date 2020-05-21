import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FilesService } from '../files.service';

@Component({
	selector: 'app-input-files',
	templateUrl: './input-files.component.html',
	styleUrls: ['./input-files.component.scss']
})
export class InputFilesComponent implements OnInit {

	get files(): File[] { return this._files.files; };

	constructor(
		private _files: FilesService
	) { }

	ngOnInit() {

	}


	uploadFile(files: File[]) {
		this._files.files = this._files.files.concat(files);
	}
}
