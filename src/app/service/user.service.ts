import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

    // this service is depend on http class

    url = "https://jsonplaceholder.typicode.com/users";

    constructor(private httpClient: HttpClient) { }
  
    GetUsers() :Observable<any>
    {
      // this method to send an HTTP Request.
      return this.httpClient.get(this.url);
      
}
  





}