import { Component, OnInit } from '@angular/core';
import { userDataService } from '../service/my-service.service'
@Component({
  selector: 'app-service1',
  templateUrl: './service1.component.html',
  styleUrls: ['./service1.component.css'],
  providers: [userDataService]
})
export class Service1Component implements OnInit {
  
  
  
  
  users: any[]

  // We have inject MyserviceService class  
  // constructor(private usersdata: userDataService) {
  //   console.log("userdata", usersdata.users());
  //   this.users = usersdata.users()

  // }


  // age;
  // showAge;
  // // injecct the service
  // constructor(private myService: MyserviceService) {
    
  // }
  
  // ageCalculator() {
  //   this.showAge = this.myService.ageCalculator(this.age)
  //  }









  ngOnInit() {
  }


}
