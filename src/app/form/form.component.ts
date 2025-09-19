import { Component, OnInit } from '@angular/core';
import { Email } from '../interface/interface.component';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-example',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  email: Email;
  emailsList: Email[] = [];
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
    push{this.email};
  }

  clear(): void {

    this.emailForm.reset();
  }

  addEmailTolist(email: Email): void {
    if (this.emailsList == null) {
     this.emailsList = []; 
    }
    this.emailsList.push({ to: email.to, 
                             from: email.from, 
                             subject: email.subject, 
                             body: email.body ? email.body : "No content" });
  }


}


