import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
NgForm
@Component({
  selector: 'app-template-form-assign',
  templateUrl: './template-form-assign.component.html',
  styleUrls: ['./template-form-assign.component.css']
})
export class TemplateFormAssignComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form: NgForm) {
    console.log('My template form values', form.value);
  }
}
