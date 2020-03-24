import { Component } from '@angular/core';
import { Group } from '../group.model';
import { GroupMoverService } from '../group-mover.service';

@Component({
	selector: 'app-groups-viewer',
	templateUrl: './groups-viewer.component.html',
	styleUrls: ['./groups-viewer.component.scss']
})
export class GroupsViewerComponent {

	groups: Group[];
	groupIndex: number = 0;
	matches: RegExpExecArray[];

	constructor(private groupMover: GroupMoverService) {
		this.groupMover.matches$.subscribe(matches => {
			this.matches = matches;
			this.setGroup();
		});
	}

	setGroup() {
		this.groups = []
		if (this.matches.length >= this.groupIndex)
			this.groupIndex = this.matches.length - 1;
		if(this.groupIndex === -1) {
			return;
		}
		const match = this.matches[this.groupIndex];
		for(let i = 0; i < match.length; i++) {
			this.groups.push(new Group(i, match[i]));
		}
	}

}
