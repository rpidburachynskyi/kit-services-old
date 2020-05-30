import {
	Component,
	OnInit,
	Input,
	Output,
	EventEmitter,
	HostListener,
	HostBinding,
} from "@angular/core";

@Component({
	selector: "kit-modal-dialog",
	templateUrl: "./kit-modal-dialog.component.html",
	styleUrls: ["./kit-modal-dialog.component.scss"],
})
export class KitModalDialogComponent {
	private _opened = false;

	@Input("opened") set opened(value: boolean) {
		this._opened = value;
		this.display = value ? "flex" : "none";
	}

	@Output("close") close = new EventEmitter();

	@HostListener("click") onClick(e) {
		this.close.emit();
	}

	@HostBinding("style.display") display: string = "none";
}
