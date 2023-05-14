import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  myname:string='Pushpa'
userCount:string='100'
  constructor() { }

  ngOnInit() {
  }
  GetDataFromChild(data:string) {
    console.log('from child', data);
  }

}
