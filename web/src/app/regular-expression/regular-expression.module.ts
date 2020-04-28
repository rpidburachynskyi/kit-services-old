import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegularExpressionRoutingModule } from './regular-expression-routing.module';
import { GroupMoverModule } from './group-mover/group-mover.module';
import { RegularExpressionComponent } from './regular-expression.component';
import { FormsModule } from '@angular/forms';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { CodeWrapperComponent } from '../components/code-wrapper/code-wrapper.component';

@NgModule({
    declarations: [
        RegularExpressionComponent,
        CodeWrapperComponent
    ],
    imports: [
        CommonModule,
        RegularExpressionRoutingModule,
        GroupMoverModule,
        CodemirrorModule,
        FormsModule
    ],
    exports: [],
    providers: [],
})
export class RegularExpressionModule { }