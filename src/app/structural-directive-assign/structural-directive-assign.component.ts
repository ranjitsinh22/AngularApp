import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive-assign',
  templateUrl: './structural-directive-assign.component.html',
  styleUrls: ['./structural-directive-assign.component.css']
})
export class StructuralDirectiveAssignComponent implements OnInit {

  array:Array<any>=[{course:"Javascript"},

  {course:"Java"},

 {course:"Python"},

{course:"c++"},

{course:".Net"},

{course:"PHP"}]

  constructor() { }

  ngOnInit() {
  }
  getSelectedValue1(value){
    console.log(value.target.value);
    this.getSelectedValue1=value.target.value
  }

}
