import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {
selectedValue:string;
  constructor() { }

  ngOnInit() {
  }

getSelectedValue(value){
  console.log(value.target.value);
  this.selectedValue=value.target.value
}

}
