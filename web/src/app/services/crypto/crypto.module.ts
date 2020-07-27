import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CryptoComponent } from "./crypto.component";
import { CryptoRoutingModule } from "./crypto-routing.module";
import { FilesComponent } from "./files/files.component";
import { InputFilesComponent } from "./files/input-files/input-files.component";
import { CryptoOptionsComponent } from "./crypto-options/crypto-options.component";
import { FileSaverModule } from "ngx-filesaver";
import { FormsModule } from "@angular/forms";
import { InputParamsComponent } from "./files/input-params/input-params.component";
import { KitModule } from "src/kit/kit.module";
import { NgWasmModule } from "ng-wasm";
@NgModule({
	declarations: [
		CryptoComponent,
		FilesComponent,
		InputFilesComponent,
		InputParamsComponent,
		CryptoOptionsComponent,
	],
	imports: [
		CommonModule,
		CryptoRoutingModule,
		KitModule,
		FileSaverModule,
		FormsModule,
		NgWasmModule,
	],
	exports: [CryptoComponent],
	providers: [],
})
export class CryptoModule {}
