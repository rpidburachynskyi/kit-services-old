import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CodesModule } from "./codes/codes.module";
import { CryptoModule } from "./crypto/crypto.module";
import { RegularExpressionModule } from "./regular-expression/regular-expression.module";
import { TextsModule } from "./texts/texts.module";

@NgModule({
	declarations: [],
	imports: [
		CommonModule,

		CodesModule,
		CryptoModule,
		RegularExpressionModule,
		TextsModule,
	],
	exports: [],
	providers: [],
})
export class ServicesModule {}
