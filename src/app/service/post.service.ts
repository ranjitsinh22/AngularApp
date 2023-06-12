import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
 postUrl = 'https://jsonplaceholder.typicode.com/posts/'
  constructor(private httpClient: HttpClient) { }

  GetAllPosts() : Observable<any>{
   return this.httpClient.get(this.postUrl );
  }

  GetPostById(id: any) : Observable<any> {
   return this.httpClient.get(this.postUrl+ id);
  }

  UpdatePostById(id: any, body: any) : Observable<any> {
   return this.httpClient.put(this.postUrl + id, body);
  }

  DeletePostById(id: any) : Observable<any> {
    return this.httpClient.delete(this.postUrl+ id);
  }

  CreatePost(body: any) : Observable<any> {
   return this.httpClient.post(this.postUrl, body);
  }
}