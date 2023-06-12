import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray,FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-reactive-form-lecture3',
  templateUrl: './reactive-form-lecture3.component.html',
  styleUrls: ['./reactive-form-lecture3.component.css']
})
export class ReactiveFormLecture3Component implements OnInit {
//array of string
notAllowedNames=['Codemind','Technology'];

genders = [
  { id : '1', value: 'Male'},
  { id: '2', value: 'Female'}
]
  myReactiveForm: FormGroup;
  constructor( private fb:FormBuilder) { 
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
    setTimeout(()=>{
this.myReactiveForm.patchValue({ //pathvalue-if we have a requirement to set one value in formGroup
  'course':'Javascript'
})
    },5000)
  }

  createForm() {
    // this.myReactiveForm = new FormGroup({
    //   'userDetails' : new FormGroup({
    //    'username': new FormControl('',[ Validators.required,this.NaNames.bind(this)]), //this keyword will point the current object
    //    'email': new FormControl('',[Validators.required, Validators.email] ),
    //   }),   
    //   'email': new FormControl('',[Validators.required, Validators.email], this.NaEmails  ),  
    //   'course': new FormControl('Angular'),
    //   'gender': new FormControl('Male'),
    //   'skills': new FormArray(
    //     [
    //       new FormControl('', Validators.required)
    //     ]
    //   )
    // })

    this.myReactiveForm = this.fb.group({
      userDetails: this.fb.group({
        username: ['',  [Validators.required, this.NaNames.bind(this) ]],
        email: ['', [Validators.required, Validators.email], this.NaEmails ]
      }),
      course: ['Angular'],
      gender: ['Male'],
      skills: this.fb.array([])
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

//custom validation
NaNames(control:FormControl){
  if(this.notAllowedNames.indexOf(control.value)-1!==-1){
  return{'namesNotAllowed':true}
}
return null;
}

// This method will validate the email fileds 
NaEmails(control: FormControl) : Promise<any> | Observable<any> {
  const myResponse = new Promise<any>((resolve, reject) => {
    setTimeout(() => {
      if (control.value === 'codemindtechnology@gmail.com') {
        resolve({'emailNotAllowed': true})
      } else {
        resolve(null)
      }
    }, 3000)
  })
  return myResponse;
}



  }
