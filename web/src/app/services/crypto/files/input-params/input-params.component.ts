import { Component, OnInit } from '@angular/core';
import { FilesService } from '../../files/files.service';
import { WhatToDo } from '../../models/WhatToDo';

@Component({
  selector: 'app-input-params',
  templateUrl: './input-params.component.html',
  styleUrls: ['./input-params.component.scss']
})
export class InputParamsComponent implements OnInit {

  set allInOne(value: Boolean) { this.files.allInOne = value; }
  get allInOne(): Boolean { return this.files.allInOne; }

  set whatToDo(value: WhatToDo) { this.files.whatToDo = value; }
  get whatToDo(): WhatToDo { return this.files.whatToDo; }

  set outputFileName(value: string) { this.files.outputFileName = value; }
  get outputFileName(): string { return this.files.outputFileName; }

  constructor(
    private files: FilesService
  ) { }

  ngOnInit() {
  }

}
