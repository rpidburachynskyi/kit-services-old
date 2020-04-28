import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {



  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
  }

  register() {
    this.api.register("qwe", "qwe")
      .subscribe(o => {
        console.log(o);
      })
  }

}
