import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupMoverService } from './group-mover.service';
import { WorkControlerService } from './work-controler.service';
import { GroupMoverComponent } from './group-mover.component';
import { InputPatternsComponent } from './input-patterns/input-patterns.component';
import { InputResultPatternComponent } from './input-result-pattern/input-result-pattern.component';
import { ResultViewerComponent } from './result-viewer/result-viewer.component';
import { WorkControlerComponent } from './work-controler/work-controler.component';
import { GroupsViewerComponent } from './groups-viewer/groups-viewer.component';
import { CodemirrorComponent, CodemirrorModule } from '@ctrl/ngx-codemirror';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        GroupMoverComponent,
        InputPatternsComponent,
        InputResultPatternComponent,
        GroupsViewerComponent,
        ResultViewerComponent,
        WorkControlerComponent
        ],
    imports: [ CommonModule ],
    exports: [ ],
    providers: [WorkControlerService],
})
export class GroupMoverModule {}