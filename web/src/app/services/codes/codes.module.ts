import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CodesRoutingModule } from "./codes-routing.module";

import { CodesComponent } from "./codes.component";

@NgModule({
	declarations: [CodesComponent],
	imports: [CommonModule, CodesRoutingModule],
	exports: [],
	providers: [],
})
export class CodesModule {}
