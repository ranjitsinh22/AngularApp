import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
//userName is subject & subject is special kind of observable
  userName;
  // inject service utility
  constructor(private utilityService: UtilityService) { 
    this.utilityService.userName.subscribe(res => {
      console.log('res from comp1', res );
      this.userName = res;
    })
  }

  ngOnInit() {
  }

  updateUserName(uname) {
  console.log(uname.value);
  this.userName = uname.value;
 this.utilityService.userName.next(uname.value);
  }
}
