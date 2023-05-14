

import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { User } from '../model/user';

@Component({
  selector: 'app-template-form-lecture3',
  templateUrl: './template-form-lecture3.component.html',
  styleUrls: ['./template-form-lecture3.component.css']
})
export class TemplateFormLecture3Component implements OnInit {
 form:FormGroup;
  constructor() { }
  courseArr : string [] = [
    'Angular', 'HMTL', 'JavaScript'
  ]

  isSubmitted: boolean = false;
  user: User = new User();
  defaultGenderValue: string = 'Male';
  defaultCourse: string = 'Angular';

  genders = [
    {
      id: '1', value: 'Male'
    },
    {
      id: '2', value: 'Female'
    }
  ]

  ngOnInit() {
  }



  OnSubmit(form: NgForm) {
    this.isSubmitted = true;
    console.log('my template form values', form.value);
    this.user = new User();
    this.user.userName = form.value.username;
    this.user.email = form.value.email;
    this.user.course = form.value.course;
    this.user.gender = form.value.gender;

 // Set default values for course and gender if the fields are empty
 this.user.course = form.value.course || this.defaultCourse;
 this.user.gender = form.value.gender || this.defaultGenderValue;


    console.log('After bind value to User Object', this.user);
form.resetForm();

    // api/ saveuserData(user: User); // this is called api endpoint 
  }



 
}
