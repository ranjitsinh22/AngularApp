import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


array:Array<any> = []
postUrl = 'https://jsonplaceholder.typicode.com/posts'
  
constructor(private httpClient : HttpClient) { }

  //method to get employee
  GetAllEmployee():Observable<any>{
return this.httpClient.get(this.postUrl);
  }




ngOnInIt(){
  
}

}
