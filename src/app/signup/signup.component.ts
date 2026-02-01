import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupMail : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log("Form gesendet");
  }

}