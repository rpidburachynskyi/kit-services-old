import { Component, OnInit } from "@angular/core";
import { ThemeManagerService } from "ng-multithemes-theme-manager";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
	userPanelVisible: Boolean = false;

	private _theme = "dark";
	get theme(): string {
		return this._theme;
	}

	set theme(theme: string) {
		this._theme = theme;
		this.themeManager.setTheme(`assets/themes/${theme}.css`);
		localStorage.setItem("THEME", theme);
	}

	constructor(private themeManager: ThemeManagerService) {
		this.theme = localStorage.getItem("THEME") ?? "dark";
	}

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
