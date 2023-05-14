import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-template-form-assign3',
  templateUrl: './template-form-assign3.component.html',
  styleUrls: ['./template-form-assign3.component.css']
})
export class TemplateFormAssign3Component implements OnInit {
  form: FormGroup; // Define the 'form' property
phoneNumber:string='';
  OnSubmit(): void {
    console.log(this.form.value)
    }
  
    Age:number;
    
  cityArr : string [] = [
    'Select City','Mumbai', 'Kolkatta', 'Delhi'
  ];

  genders = [
    {
      id: '1', value: 'Male'
    },
    {
      id: '2', value: 'Female'
    }
  ]
  defaultGenderValue= 'Male';
  defaultCity:'Select City';
  constructor() {

  }

  ngOnInit(): void {

    
  }



}
