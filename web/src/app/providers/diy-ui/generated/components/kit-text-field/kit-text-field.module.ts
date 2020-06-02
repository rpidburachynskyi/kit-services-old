import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { KitTextFieldComponent } from "./kit-text-field.component";
import { FormsModule } from "@angular/forms";

@NgModule({
	declarations: [KitTextFieldComponent],
	imports: [CommonModule, FormsModule],
	exports: [KitTextFieldComponent],
	providers: [],
})
export class KitTextFieldModule {}
