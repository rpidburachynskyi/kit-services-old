import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email: string = "";
  password: string = "";

  form = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl("", [Validators.required])
  })

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

  onSubmit() {
    console.log(this.form);
  }

}
