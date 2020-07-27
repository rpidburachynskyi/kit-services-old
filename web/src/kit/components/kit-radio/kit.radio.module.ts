import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { KitRadioComponent } from "./kit-radio.component";
import { FormsModule } from "@angular/forms";
import { KitRadioGroupComponent } from "./kit-radio-group/kit-radio-group.component";

@NgModule({
	declarations: [KitRadioComponent, KitRadioGroupComponent],
	imports: [CommonModule, FormsModule],
	exports: [KitRadioComponent, KitRadioGroupComponent],
	providers: [],
})
export class KitRadioModule {}
