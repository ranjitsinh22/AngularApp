import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/user';

@Component({
  selector: 'app-template-form-lecture3',
  templateUrl: './template-form-lecture3.component.html',
  styleUrls: ['./template-form-lecture3.component.css']
})
export class TemplateFormLecture3Component implements OnInit {
  courseArr: string[] = ['Angular', 'HTML', 'JavaScript'];
  isSubmitted: boolean = false;
  user: User = new User();
  defaultGenderValue: string = 'Male';
  defaultCourse: string = 'Angular';
  formValues: any = {}; // Store form values after submission

  genders = [
    {
      id: '1',
      value: 'Male'
    },
    {
      id: '2',
      value: 'Female'
    }
  ];

  ngOnInit() {
    this.user.gender = this.defaultGenderValue;
    this.user.course = this.defaultCourse;
  }

  OnSubmit(form: NgForm) {
    this.isSubmitted = true;
    console.log('my template form values', form.value);
  
    this.user.userName = form.value.username;
    this.user.email = form.value.email;
    this.user.gender = form.value.gender;
    this.user.course = form.value.course;
    console.log('After bind value to User Object', this.user);
  
    // Store form values after submission
    this.formValues = { ...form.value };
  
    // Reset form values individually
    this.resetFormFields(form);
  
    // Reset to default values after form submission
    this.user.gender = this.defaultGenderValue;
    this.user.course = this.defaultCourse;
  }
  
  resetFormFields(form: NgForm) {
    form.controls.username.reset();
    form.controls.email.reset();
  }
}
