import { Component, OnInit } from '@angular/core';
import { iKitComboboxOption } from 'src/layout/models/iKitComboboxOption.model';
import { WorkControlerService, iWorkExtend } from '../work-controler.service';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import { iWork } from '../work-controler.service';

@Component({
  selector: 'app-work-controler',
  templateUrl: './work-controler.component.html',
  styleUrls: ['./work-controler.component.scss']
})
export class WorkControlerComponent {

  get value(): string { return this.workController.currentWork.id; }
  get options(): iKitComboboxOption[] { return this.workController.works.map(({ id, name }) => ({ value: id.toString(), text: name })) }

  get currentWork(): iWorkExtend { return this.workController.currentWork; };

  constructor(
    private workController: WorkControlerService,
    private apollo: Apollo
  ) {

  }

  changeWork(value: string) {
    this.workController.setWork(value);
  }

  add() {
    const name = prompt("Name?", "");

    if (!name) {
      alert("ERROR");
      return;
    }

    this.workController.add(name);
  }

  saveCurrentToLocal() {
    this.workController.add(name);
  }

  saveCurrentToGlobal = this.workController.sa

  removeLocal() {

  }

  removeGlobal() {

  }
}
