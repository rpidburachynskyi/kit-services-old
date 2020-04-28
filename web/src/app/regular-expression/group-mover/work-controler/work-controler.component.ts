import { Component, OnInit } from '@angular/core';
import { iKitComboboxOption } from 'src/layout/models/iKitComboboxOption.model';
import { WorkControlerService } from '../work-controler.service';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-work-controler',
  templateUrl: './work-controler.component.html',
  styleUrls: ['./work-controler.component.scss']
})
export class WorkControlerComponent {

  get value(): string { return this.workController.currentWork.id; }
  get options(): iKitComboboxOption[] { return this.workController.works.map(({ id, name }) => ({ value: id, text: name })) }

  constructor(
    private workController: WorkControlerService,
    private apollo: Apollo
  ) {
    this.apollo
      .watchQuery({
        query: gql`
          {
            books {
              title
            }
          }
        `,
      })
      .valueChanges.subscribe(result => {
        console.log(result);
      });
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
  };

  remove = () => this.workController.removeCurrent();

  save = this.workController.saveCurrent;

  saveAs() {
    const name = prompt("Name?", "");

    if (!name) {
      alert("ERROR");
      return;
    }

    this.workController.saveCurrentAs(name);
  }
}
