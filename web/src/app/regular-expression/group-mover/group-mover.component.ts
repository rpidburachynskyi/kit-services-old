import { Component, OnInit } from '@angular/core';

declare let Split: any;

@Component({
  selector: 'app-group-mover',
  templateUrl: './group-mover.component.html',
  styleUrls: ['./group-mover.component.scss']
})
export class GroupMoverComponent implements OnInit {
  

  constructor() {
    
  }

  ngOnInit() {
    Split([".inputs", ".outputs"], { sizes: [50, 50] });
    Split(["app-groups-viewer", "app-result-viewer"], { sizes: [50, 50], direction: "vertical" });
    Split(["app-input-patterns", "app-input-result-pattern"], { sizes: [50, 50], direction: "vertical" });
  }

}
