import { Component, OnInit } from '@angular/core';
import { FilesService } from './files.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {

  get files(): File[] { return this._files.files; };
  set files(files: File[]) { this._files.files = files };

  get buttonLabel(): string { return this._files.whatToDo[0].toUpperCase() + this._files.whatToDo.substring(1); }

  constructor(
    private _files: FilesService
  ) { }

  ngOnInit() {
  }

  onDoClick() {
    this._files.do();
  }
}
