import { Component, OnInit } from '@angular/core';
import { FilesService } from '../files/files.service';
import { DencryptMethods } from '../models/DencryptMethods.enum';

@Component({
  selector: 'app-dencrypt-params',
  templateUrl: './dencrypt-params.component.html',
  styleUrls: ['./dencrypt-params.component.scss']
})
export class DencryptParamsComponent implements OnInit {

  get method(): string {
    switch (this.files.method) {
      case DencryptMethods.XOR: return "xor";
    }
  }

  set method(value: string) {
    switch (value) {
      case "xor": this.files.method = DencryptMethods.XOR; break;
    }
  }

  get key(): string { return this.files.key; }
  set key(value: string) { this.files.key = value; }

  constructor(
    private files: FilesService
  ) { }

  ngOnInit() {
  }

}
