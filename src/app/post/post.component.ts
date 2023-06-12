import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
name ='test';


  //Inject the post service
  constructor(private postService : PostService) { }



  ngOnInit() {
    //get all posts
    this.postService.GetAllPosts().subscribe(res=>{
      console.log('get all posts',res)
    })

    //get post by id
this.postService.GetAllPosts().subscribe(res =>{
  console.log('get post by id',res)
})
//update post by id
this.updatePost();

//to call delete method
this.deletePostById();
this.name; //to access any property ,method - we need this keywords

//to call Create Post method
this.createPost();
}

updatePost(){
  let data = {
    id:new Date().getTime(),
    title:'this is updated title'
  }
  this.postService.UpdatePostById(1,data).subscribe(res=>{
    console.log('data updated successfully',res)
  })
}
deletePostById(){
  this.postService.DeletePostById(1).subscribe(res=>{
console.log('post deletd',res);
  })
}

createPost(){
  let body={
    id:new Date().getTime(),
  title:'this is new',
  body:'this is the post method of httpClient'
  }
  this.postService.CreatePost(body).subscribe(res=>{
    console.log('post created successfully',res);
  })
}


}
