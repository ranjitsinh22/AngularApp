import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template-form-assign2',
  templateUrl: './template-form-assign2.component.html',
  styleUrls: ['./template-form-assign2.component.css']
})
export class TemplateFormAssign2Component implements OnInit {

 

  genders = [
    {
      id: '1', value: 'Male'
    },
    {
      id: '2', value: 'Female'
    }
  ]
  defaultGenderValue='Male';

  //default value==
  username='Rocky';

  degreeArr : string [] = [
    'Bachelor Degree', 'Master Degree', 'PHD'
  ];

  jobArr : string [] = [
    'Angular Developer', 'React Developer', 'FullStack Developer'
  ]

  constructor() { }

  ngOnInit() {
  }

  OnSubmit(form:NgForm){
    console.log('My template form value' , form.value); //to get form value

}



}
