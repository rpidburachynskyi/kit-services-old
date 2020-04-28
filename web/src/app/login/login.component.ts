import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private apollo: Apollo
  ) {
    
  }

  ngOnInit() {
  }

}
