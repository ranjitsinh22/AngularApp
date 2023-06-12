import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  formData = {
    name: '',
    email: '',
    message: ''
  };

  submitForm() {
    // Add logic to handle the form submission
    console.log(this.formData); // Example: Log form data to the console
  }

}
