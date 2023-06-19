import { Component } from '@angular/core';
import { UserService } from './service/user.service';
import { FirebaseService } from './service/firebase.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoList';
  show = true;

  // title = 'angularapp';
  userService: any;
  isDestory: boolean = true;
  //firebase Service Called
  constructor(private firebaseServce:FirebaseService) {
   //instance or object ...given by angular or provider
    this.firebaseServce.createPost().subscribe(res=>{
      console.log(' res from firebase',res);
    })
  }

// constructor(private userService : UserService){

// }

// age;
// showAge;

// constructor(private myService:MyserviceService){
// }
// ageCalculatore(){
//   this.showAge = this.myService.ageCalculatore(this.age)
// }

getUserData(){
  this.userService.GetUsers().subscribe(res =>{
    console.log('my user data',res);
    
  })
}

data : string = 'red';
changecolor() {
  this.data = 'blue';
  }

OnDestroy() {
  this.isDestory = false;
}

}