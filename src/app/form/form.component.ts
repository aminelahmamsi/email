import { Component, OnInit } from '@angular/core';
import { Email } from '../interface/interface.component';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-example',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormsExampleComponent implements OnInit {

  email: Email;
  @ViewChild('emailForm') emailForm: any;

  constructor() { }

  ngOnInit(): void {
    this.email = {
      to: "",
      from: "",
      subject: "",
      body: null
    };
  }

  sendForm(): void {
    window.alert("Received information: " + this.email.to + " " + this.email.from + " " + this.email.subject + " " + this.email.body);
  }

  clear(): void {

    this.emailForm.reset();
  }
}


