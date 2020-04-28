import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { iSubservice } from '../models/services/subservice.model';

interface iSubserviceExtend extends iSubservice {
	opened: Boolean;
}

@Component({
	selector: 'app-regular-expression',
	templateUrl: './regular-expression.component.html',
	styleUrls: ['./regular-expression.component.scss']
})
export class RegularExpressionComponent implements OnInit {

	private _subservices: iSubserviceExtend[];

	get subservices() { return this._subservices; }

	groupMover: {
		opened: Boolean
	} = {
			opened: false
		}

	constructor(
		private services: ServicesService
	) {
		this._subservices = services.allServices[0].subservices.map(s => ({
			...s,
			opened: false,
		}));
	}

	ngOnInit() {
	}

}