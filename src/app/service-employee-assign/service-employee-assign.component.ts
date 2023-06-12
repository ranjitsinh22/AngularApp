import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-service-employee-assign',
  templateUrl: './service-employee-assign.component.html',
  styleUrls: ['./service-employee-assign.component.css']
})
export class ServiceEmployeeAssignComponent implements OnInit {


  //Inject the post service
  constructor(private employeeService : EmployeeService) { }


  arrayOfObject: any = []
  arrayObj:any = []
  ngOnInit(): void {
    // get All values from Array Of Object
    this.employeeService.GetAllEmployee().subscribe(res => {
      // console.log(`get all post`, res); 
      this.arrayOfObject = res;
      console.log(this.arrayOfObject);

})
}
}