import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { KitModalDialogComponent } from "./kit-modal-dialog.component";

describe("KitModalDialogComponent", () => {
	let component: KitModalDialogComponent;
	let fixture: ComponentFixture<KitModalDialogComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [KitModalDialogComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(KitModalDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
