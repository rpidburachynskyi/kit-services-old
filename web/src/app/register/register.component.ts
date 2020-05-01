import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email: string = "";
  password: string = "";

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
  }

  register() {
    this.api.register(this.email, this.password)
      .subscribe(o => {
        console.log(o);
      })
  }

}
