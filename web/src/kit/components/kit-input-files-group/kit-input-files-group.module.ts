import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { KitInputFilesGroupComponent } from "./kit-input-files-group.component";
import { KitInputFileModule } from "../kit-input-file/kit-input-file.module";

@NgModule({
	declarations: [KitInputFilesGroupComponent],
	imports: [CommonModule, KitInputFileModule],
	exports: [KitInputFilesGroupComponent],
	providers: [],
})
export class KitInputFilesGroupModule {}
