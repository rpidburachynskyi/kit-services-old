import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RegularExpressionRoutingModule } from "./regular-expression-routing.module";
import { GroupMoverModule } from "./group-mover/group-mover.module";
import { RegularExpressionComponent } from "./regular-expression.component";
import { FormsModule } from "@angular/forms";
import { CodemirrorModule } from "@ctrl/ngx-codemirror";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
	declarations: [RegularExpressionComponent],
	imports: [
		CommonModule,
		RegularExpressionRoutingModule,
		GroupMoverModule,
		CodemirrorModule,
		FormsModule,
		SharedModule,
	],
	exports: [],
	providers: [],
})
export class RegularExpressionModule {}
