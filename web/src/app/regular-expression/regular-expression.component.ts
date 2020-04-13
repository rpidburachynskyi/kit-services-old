import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
	selector: 'app-regular-expression',
	templateUrl: './regular-expression.component.html',
	styleUrls: ['./regular-expression.component.scss']
})
export class RegularExpressionComponent implements OnInit {

	get subservices() { return this.services.allServices[0].subservices; }

	constructor(
		private services: ServicesService
	) { }

	ngOnInit() {
	}

}