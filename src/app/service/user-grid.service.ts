import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserGridService {
  apiUrl = 'https://randomuser.me/api/?results=50';
  constructor(private http:HttpClient) { }
}
