import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form-lecture1',
  templateUrl: './reactive-form-lecture1.component.html',
  styleUrls: ['./reactive-form-lecture1.component.css']
})
export class ReactiveFormLecture1Component implements OnInit {

  genders = [
    {
      id: '1', value: 'male'
    },
    { id: '2', value: 'female' }
  ]


  myReactiveForm: FormGroup;



  constructor() {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.myReactiveForm = new FormGroup({
      'username': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'course': new FormControl('Angular'),
      'gender': new FormControl('Male')
    })
  }

  OnSubmit() {
    console.log('My reactive Form', this.myReactiveForm);

  }


}
