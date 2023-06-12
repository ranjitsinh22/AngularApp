import { Component, OnInit } from '@angular/core';
import{userDataService} from '../service/my-service.service'

@Component({
  selector: 'app-service2',
  templateUrl: './service2.component.html',
  styleUrls: ['./service2.component.css'],
  providers: [userDataService]
})
export class Service2Component implements OnInit {
  users: { name: string; age: number; company: string; }[];

  // This is nothing but constructor dependancy injection .
// user:any[];
//   constructor(private userdata: userDataService) { 
//     console.log("userdata",userdata.users());
//     this.users=userdata.users()
//   }

  // Contructor(private objMyServiceService : MyserviceService){}

  ngOnInit() {
//create instance of myservice class
  //  this.objMyServiceService.GetData();

  }

  Print(){
    //instance of Myservices
    // this.objMyserviceService.PrintFile();
  }

}
