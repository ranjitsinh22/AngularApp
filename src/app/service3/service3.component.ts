import { Component, OnInit } from '@angular/core';
import{EmployeeService} from '../service/employee.service'
@Component({
  selector: 'app-service3',
  templateUrl: './service3.component.html',
  styleUrls: ['./service3.component.css'],
  providers:[EmployeeService]
})
export class Service3Component implements OnInit {


  constructor() { 
  }



  ngOnInit():void {
  }





}
