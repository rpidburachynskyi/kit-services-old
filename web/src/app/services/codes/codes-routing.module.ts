import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { CodesComponent } from "./codes.component";

const routes: Routes = [{ path: "codes", component: CodesComponent }];

@NgModule({
	imports: [CommonModule, RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CodesRoutingModule {}
