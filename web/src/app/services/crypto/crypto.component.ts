import { Component, OnInit } from '@angular/core';
import { CryptoService } from './crypto.service';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent implements OnInit {

  constructor(
    private crypto: CryptoService
  ) { }

  ngOnInit() {
  }

}
