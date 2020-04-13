import { Component, OnInit } from '@angular/core';
import { GroupMoverService } from '../group-mover.service';

@Component({
  selector: 'app-result-viewer',
  templateUrl: './result-viewer.component.html',
  styleUrls: ['./result-viewer.component.scss']
})
export class ResultViewerComponent {

  result: string;
  
  constructor(private groupMover: GroupMoverService) {
    groupMover.result$.subscribe(result => {
      this.result = result;
    });
  }
}