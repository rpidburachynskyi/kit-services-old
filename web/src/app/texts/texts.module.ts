import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextsComponent } from './texts.component';
import { JsTestService } from './js-text/js-test.service';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { JsTextComponent } from './js-text/js-text.component';
import { TextsRoutingModule } from './texts-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        TextsComponent,
        JsTextComponent
    ],
    imports: [ 
        CommonModule, 
        TextsRoutingModule,
        FormsModule,
        CodemirrorModule,
    ],
    exports: [
    ],
    providers: [
        JsTestService
    ],
})
export class TextsModule {

}