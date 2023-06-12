import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {

  //firebase Service Called
  constructor(private firebaseServce:FirebaseService) {

    this.firebaseServce.createData().subscribe(res=>{
      console.log('res from firebase API DATA',res);
      
    })
  }


  ngOnInit() {
        //instance or object ...given by angular or provider
        // this.firebaseServce.getData().subscribe(res=>{
        //   console.log(' res from  firebase API Database',res);
        // })
      }


  }


