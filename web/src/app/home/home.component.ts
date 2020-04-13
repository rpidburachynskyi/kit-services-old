import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { iService } from '../models/services/service.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  get allServices() : iService[] { return this.services.allServices; }

  constructor(
    private services: ServicesService
  ) { }

  ngOnInit() {
  }

}
