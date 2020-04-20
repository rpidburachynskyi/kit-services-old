import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegularExpressionRoutingModule } from './regular-expression-routing.module';
import { GroupMoverModule } from './group-mover/group-mover.module';

@NgModule({
    declarations: [],
    imports: [ 
        CommonModule,
        RegularExpressionRoutingModule,
        // GroupMoverModule
    ],
    exports: [],
    providers: [],
})
export class RegularExpressionModule {}