import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../service/subject.service';

@Component({
  selector: 'app-subject-assign-comp3',
  templateUrl: './subject-assign-comp3.component.html',
  styleUrls: ['./subject-assign-comp3.component.css']
})
export class SubjectAssignComp3Component implements OnInit {


  firstName:any;
  // inject service
  constructor(private subService: SubjectService) { 
    this.subService.firstName.subscribe(res => {
      console.log('res from comp1', res );
      this.firstName = res;
    })
  }

  ngOnInit() {
  }

  updateName(fname) {
  console.log(fname.value);
  this.firstName = fname.value;
 this.subService.firstName.next(fname.value);
  }
}
