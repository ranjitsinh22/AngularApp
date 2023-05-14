import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
NgForm
@Component({
  selector: 'app-template-form-lecture1',
  templateUrl: './template-form-lecture1.component.html',
  styleUrls: ['./template-form-lecture1.component.css']
})
export class TemplateFormLecture1Component implements OnInit {

OnSubmit(form:HTMLFormElement){
  // if(form.valid){ //send value to server only if form is valid
  console.log('My template form value' , form); //to get NgForm
  // console.log('My template form value' , form.value); //to get form value
  // console.log('User Name is:' , form.controls['username'].value); //to get particular value 
  // console.log('Is form Submitted:' , form.submitted); //to check form is submitted by user 

  // }
}

// OnSubmit(form:NgForm){
//   console.log('My template form value' , form);
// }

//api/saveuserData(user:User); - this is called api endpoint

  constructor() { }

  ngOnInit() {
  }




}
