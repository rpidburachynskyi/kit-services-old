import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
	userPanelVisible: Boolean = false;

	constructor() {}

	ngOnInit() {}

	openUserPanel(event: Event) {
		if (this.userPanelVisible) return;
		event.stopPropagation();
		this.userPanelVisible = true;
	}

	closeUserPanel() {
		if (this.userPanelVisible) this.userPanelVisible = false;
	}
}
