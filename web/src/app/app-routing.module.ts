import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JsTextComponent } from './texts/js-text/js-text.component';

const routes: Routes = [
  { path: 'jst', component: JsTextComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
