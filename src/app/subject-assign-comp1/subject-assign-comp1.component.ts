import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../service/subject.service';

@Component({
  selector: 'app-subject-assign-comp1',
  templateUrl: './subject-assign-comp1.component.html',
  styleUrls: ['./subject-assign-comp1.component.css']
})
export class SubjectAssignComp1Component implements OnInit {

//userName is subject & subject is special kind of observable
  firstName: any;
// inject service utility
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
