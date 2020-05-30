import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CodeWrapperComponent } from "./code-wrapper/code-wrapper.component";
import { FormsModule } from "@angular/forms";
import { CodemirrorModule } from "@ctrl/ngx-codemirror";
import { CodeWrapperErrorsComponent } from "./code-wrapper/code-wrapper-errors/code-wrapper-errors.component";
import { UserIconComponent } from "./user-icon/user-icon.component";
import { CurrentUserIconComponent } from "./user-icon/current-user-icon.component";
import { CurrentUserIconDirective } from "./user-icon/current-user-icon.directive";

@NgModule({
	declarations: [
		CodeWrapperComponent,
		CodeWrapperErrorsComponent,
		UserIconComponent,
		CurrentUserIconComponent,
		CurrentUserIconDirective,
	],
	imports: [CommonModule, FormsModule, CodemirrorModule],
	exports: [
		CodeWrapperComponent,
		CodeWrapperErrorsComponent,
		UserIconComponent,
		CurrentUserIconComponent,
		CurrentUserIconDirective,
	],
})
export class SharedModule {}
