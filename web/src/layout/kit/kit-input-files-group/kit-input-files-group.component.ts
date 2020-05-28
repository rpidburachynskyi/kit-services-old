import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'kit-input-files-group',
  templateUrl: './kit-input-files-group.component.html',
  styleUrls: ['./kit-input-files-group.component.scss']
})
export class KitInputFilesGroupComponent implements OnInit {

  files: File[] = [];

  @Input("files") _files: File[];
  @Output("filesChange") _filesChange: EventEmitter<File[]> = new EventEmitter();


  ngOnInit() {

  }

  uploadFile(files: File[]) {
    this.files = this.files.concat(files);
    this._filesChange.emit(files);
  }

  unloadFile(index: number) {
    this.files = this.files.filter((f, i) => i !== index);
  }
}
