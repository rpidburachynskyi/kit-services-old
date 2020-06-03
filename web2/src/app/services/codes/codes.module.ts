import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CodesRoutingModule } from "./codes-routing.module";

import { CodesComponent } from "./codes.component";
import { MinimizerComponent } from "./minimizer/minimizer.component";

@NgModule({
	declarations: [CodesComponent, MinimizerComponent],
	imports: [CommonModule, CodesRoutingModule],
	exports: [],
	providers: [],
})
export class CodesModule {}
