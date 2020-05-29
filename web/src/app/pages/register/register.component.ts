import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { RegisterGQL } from 'src/app/providers/apollo/generated/graphql';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl("", [Validators.required])
  })

  constructor(
    private apollo: Apollo
  ) { }

  onSubmit() {
    new RegisterGQL(this.apollo).mutate({
      email: this.form.controls.email.value,
      password: this.form.controls.password.value
    }).subscribe(observer => {
      console.log(observer);
    })
  }

}
