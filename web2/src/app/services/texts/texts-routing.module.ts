import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TextsComponent } from './texts.component';
import { JsTextComponent } from './js-text/js-text.component';
import { DesignCleanComponent } from './design-clean/design-clean.component';

const routes: Routes = [
    { path: 'texts', component: TextsComponent },
    { path: 'texts/design-clean', component: DesignCleanComponent },
    { path: 'texts/js-text', component: JsTextComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TextsRoutingModule {}
