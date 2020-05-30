import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PagesRoutingModule } from "./pages-routing.module";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { KitModule } from "src/layout/kit.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ProfileComponent } from './profile/profile.component';

@NgModule({
	declarations: [HomeComponent, LoginComponent, RegisterComponent, ProfileComponent],
	imports: [
		CommonModule,
		PagesRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule,
		KitModule,
	],
})
export class PagesModule {}
