import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-reactive-form-lecture2',
  templateUrl: './reactive-form-lecture2.component.html',
  styleUrls: ['./reactive-form-lecture2.component.css']
})
export class ReactiveFormLecture2Component implements OnInit {
  genders = [
    { id : '1', value: 'Male'},
    { id: '2', value: 'Female'}
  ]
  myReactiveForm: FormGroup;
  constructor() { 
    this.createForm();
  }
  
  isSubmitted: boolean = false;
  ngOnInit() {
    // setTimeout(() => {
    //   this.myReactiveForm.setValue({
    //     'userDetails' : {
    //       'username' : 'Jack',
    //       'email': 'jack@gmail.com'
    //     },
    //     'course': 'HTML',
    //     'gender' : 'Female',
    //     'skills' : ['Azure']
    //   })
    // }, 5000)
  }

  createForm() {
    this.myReactiveForm = new FormGroup({
      'userDetails' : new FormGroup({
       'username': new FormControl('', Validators.required),
       'email': new FormControl('',[Validators.required, Validators.email] ),
      }),     
      'course': new FormControl('Angular'),
      'gender': new FormControl('Male'),
      'skills': new FormArray(
        [
          new FormControl('', Validators.required)
        ]
      )
    })
  }

  OnSubmit() {
    this.isSubmitted = true;
    console.log('my reactive form ', this.myReactiveForm)
  }
  OnAddSkills() {
   (<FormArray>this.myReactiveForm.get('skills')).push(new FormControl('', Validators.required));
  }
  // Inside your component class
OnRemoveSkill() {
  const skillsFormArray = this.myReactiveForm.get('skills') as FormArray;
  if (skillsFormArray.length > 0) {
    skillsFormArray.removeAt(skillsFormArray.length - 1);
  }
}


  }
