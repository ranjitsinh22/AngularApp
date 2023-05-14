import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/user';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormsComponent implements OnInit {
 
  constructor() { }
  courseArr : string [] = [
    'Angular', 'HMTL', 'JavaScript'
  ]
  ngOnInit() {
  }
  isSubmitted=false
 user:any=User;
  OnSubmit(form: NgForm) {
    this.isSubmitted = true;
    console.log('my template form values', form.value);
    this.user = new User();
    this.user.userName = form.value.username;
    this.user.email = form.value.email;
    this.user.course = form.value.course;
    this.user.gender = form.value.gender;

    console.log('After bind value to User Object', this.user);

    // api/ saveuserData(user: User); // api endpoint 
  }
  genders = [
    {
      id: '1', value: 'Male'
    },
    {
      id: '2', value: 'Female'
    }
  ]
  defaultGenderValue= 'Male';
  defaultCourse="Angular";

  


}
