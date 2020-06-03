import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CryptoComponent } from "./crypto.component";
import { CryptoRoutingModule } from "./crypto-routing.module";
import { FilesComponent } from "./files/files.component";
import { InputFilesComponent } from "./files/input-files/input-files.component";
import { DencryptParamsComponent } from "./dencrypt-params/dencrypt-params.component";
import { FileSaverModule } from "ngx-filesaver";
import { FormsModule } from "@angular/forms";
import { InputParamsComponent } from "./files/input-params/input-params.component";
import { DiyUiModule } from "../../providers/diy-ui/diy-ui.module";

@NgModule({
	declarations: [
		CryptoComponent,
		FilesComponent,
		InputFilesComponent,
		InputParamsComponent,
		DencryptParamsComponent,
	],
	imports: [
		CommonModule,
		CryptoRoutingModule,
		DiyUiModule,
		FileSaverModule,
		FormsModule,
	],
	exports: [CryptoComponent],
	providers: [],
})
export class CryptoModule {}
