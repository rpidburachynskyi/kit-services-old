import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GroupMoverComponent } from './group-mover/group-mover.component';
import { RegularExpressionComponent } from './regular-expression.component';

const routes: Routes = [
    { path: 'regular-expression', component: RegularExpressionComponent },
    { path: 'regular-expression/group-mover', component: GroupMoverComponent }
  ];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegularExpressionRoutingModule {}
