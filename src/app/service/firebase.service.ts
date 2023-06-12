import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  firebaseUrl = 'https://angularproject-b0cf7-default-rtdb.firebaseio.com/';
  
  firebaseUrl2='https://angularprojectnew-b7845-default-rtdb.firebaseio.com/';
  
  constructor(private httpClient: HttpClient) { }

  //to post data on that url create method
  createPost() : Observable<any> {
    let postData = {
      title: 'This is angular 8 crud with firebase',
      content: 'This is test firebase'
    }
   return this.httpClient.post(this.firebaseUrl + 'posts.json', postData);

  }

  getPostData() : Observable<any> {
   return this.httpClient.get(this.firebaseUrl+ 'posts.json');
  }

  //API 2
createData():Observable<any>{
  let postData = {
    title: 'This is angular 8 crud with firebase revision',
    content: 'This is test firebase revision'

  }
  return this.httpClient.post(this.firebaseUrl2 + 'posts.json', postData);
}

getData() : Observable<any> {
  return this.httpClient.get(this.firebaseUrl2+ 'posts.json');
 }

}