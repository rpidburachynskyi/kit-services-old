import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ServiceWorkerModule as ServiceWorkerModuleAngular } from "@angular/service-worker";
import { environment } from "src/environments/environment";

@NgModule({
	declarations: [],
	imports: [
		CommonModule,

		ServiceWorkerModuleAngular.register("ngsw-worker.js", {
			enabled: environment.production,
		}),
	],
})
export class ServiceWorkerModule {}
