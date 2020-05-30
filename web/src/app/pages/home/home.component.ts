import { Component, OnInit } from "@angular/core";
import { iService } from "src/app/models/services/service.model";
import { ServicesService } from "src/app/services/services.service";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
	get allServices(): iService[] {
		return this.services.allServices;
	}

	constructor(private services: ServicesService) {}

	ngOnInit() {}
}
