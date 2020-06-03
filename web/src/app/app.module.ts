import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";

import { CodemirrorModule } from "@ctrl/ngx-codemirror";
import { GroupMoverService } from "./services/regular-expression/group-mover/group-mover.service";
import { ApolloModule } from "./providers/apollo/apollo.module";
import { PagesModule } from "./pages/pages.module";
import { RouterModule } from "@angular/router";
import { ServiceWorkerModule } from "./providers/service-worker/service-worker.module";
import { ServicesModule } from "./services/services.module";
import { DiyUiModule } from "./providers/diy-ui/diy-ui.module";
import { HeaderModule } from "../header/header.module";
import { environment } from "../environments/environment";

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		RouterModule.forRoot([]),

		HeaderModule,

		DiyUiModule,

		PagesModule,
		CodemirrorModule,

		ServicesModule,

		ApolloModule,

		ServiceWorkerModule,
	],
	exports: [],
	providers: [GroupMoverService],
	bootstrap: [AppComponent],
})
export class AppModule {}
