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
  emailsList: Email[];
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

  addEmailTolist(email: Email): void {
    if (this.emailsList == null) {
     this.emailsList = []; 
    }
    this.emailsList.push({ to: email.to, 
                             from: email.from, 
                             subject: email.subject, 
                             body: email.body ? email.body : "No content" });
  }

  clear(): void {

    this.emailForm.reset();
  }

  sendForm(): void {
    window.alert("The email " + this.email.subject + "has been sent to " + this.email.to);
    this.addEmailTolist(this.email);
    this.clear();
  }


}


