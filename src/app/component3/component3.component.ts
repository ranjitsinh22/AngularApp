import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  userName;
  // inject service
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
