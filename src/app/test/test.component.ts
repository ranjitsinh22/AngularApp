import { Component,EventEmitter ,Input, OnInit, Output } from "@angular/core";

@Component({
    selector:'app-test',
    templateUrl:'./test.component.html'
})
export class TestComponent implements OnInit{

    // taking value from parent
@Input()  childName: string;
@Input()   count: string;

//declare output property with help of event emitter
@Output() fromChild: EventEmitter<string>=new EventEmitter<string>();

ngOnInit(): void {
  console.log('from parent', this.childName); 
  console.log('count', this.count);
}

// written the method 
SendToParent() {
  // custom event i.e fromChild
  this.fromChild.emit('Data is comming from child componnet');
}
}