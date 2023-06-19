import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit {
  myObsrvable: any;

  constructor() { }

  ngOnInit() {
    this.myObsrvable=of('this is my custom observable')
  }



}
