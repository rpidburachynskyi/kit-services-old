import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeWrapperComponent } from './code-wrapper/code-wrapper.component';
import { FormsModule } from '@angular/forms';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { CodeWrapperErrorsComponent } from './code-wrapper/code-wrapper-errors/code-wrapper-errors.component';



@NgModule({
  declarations: [
    CodeWrapperComponent,
    CodeWrapperErrorsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CodemirrorModule
  ],
  exports: [
    CodeWrapperComponent,
    CodeWrapperErrorsComponent
  ],
})
export class SharedModule { }
