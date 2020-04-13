import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupMoverService } from './group-mover.service';
import { ServicesService } from 'src/app/services.service';

declare let Split: any;

@Component({
  selector: 'app-group-mover',
  templateUrl: './group-mover.component.html',
  styleUrls: ['./group-mover.component.scss']
})
export class GroupMoverComponent implements OnInit {
  exampleIndex: -1;

  constructor(
    private groupMover: GroupMoverService,
    private services: ServicesService,
    private activated: ActivatedRoute
  ) {
    const index = +this.activated.snapshot.queryParams.example;
    if(index && this.services.allServices[0].subservices[0].examples.length >= index) 
      this.groupMover.setGroupMoverExample(this.services.allServices[0].subservices[0].examples[index - 1]);
    else this.groupMover.setGroupMoverExample({ regularExpression: "", resultEach: "", resultGlobal: "", resultArguments: "", type: "each", value: "" });
  }

  ngOnInit() {
    Split([".inputs", ".outputs"], { sizes: [50, 50] });
    Split(["app-groups-viewer", "app-result-viewer"], { sizes: [50, 50], direction: "vertical" });
    Split(["app-input-patterns", "app-input-result-pattern"], { sizes: [50, 50], direction: "vertical" });
  }

}