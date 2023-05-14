import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';



@Component({
  selector: 'app-template-form-lecture2',
  templateUrl: './template-form-lecture2.component.html',
  styleUrls: ['./template-form-lecture2.component.css']
})
export class TemplateFormLecture2Component implements OnInit {

courseArr:any[]=[,'HTML', 
  'Angular','Javascript'
]

  constructor() { }

  ngOnInit() {
  }


OnSubmit(form:NgForm){
  console.log('my template form value',form.value);
  
}

defaultCourse='Angular' //can set default value using [ngModel] property binding

getCourse(value){
  console.log(value.target.value);
  
}

username='Rocky'

genders=[
  {
    id:'1',value:'Male'
  },
  {
    id:'2',value:'Female'
  },
];

defaultGenderValue='Male';

}
