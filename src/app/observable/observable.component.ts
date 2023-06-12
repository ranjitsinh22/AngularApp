import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  //inject the user serviece
  constructor(private userService: UserService) { }

  //ngOnInit method called when the this component is initialised
  //it called by default
  ngOnInit() {

  // Subscribe observable using observer's three method
  //   observable-pass data ,it  support to transfer data from publisher to subscriber
  //   publisher is service and subscriber is component
  //we can optionally include the three callbacks method-next,error,complete
  
//   this.userService.GetUsers().subscribe((res => { //observer - revieve data, it is basically who subscribe the observable
// console.log('user respose',res)
//   }),
//   (error:any) =>{
// console.log('error occured',error)
//   }),
//   ()=> console.log('completed observable')

//   }

// this.userService.GetUsers().subscribe(res=>{
// console.log('getting data from observable component')
// })

//Observable  //custom method
const obs = new Observable((observer)=>{  //subscribe method means observer
console.log('my observable start');
observer.next('1') // 1,2,3,4,5 are data stream
observer.next('2')
observer.next('3')
observer.next('4')
observer.next('5')

})

// obs.subscribe(
//   val=>{console.log(val)}, //next method
//   error => {console.log('error')}, //error method
//   () => {console.log('Completed')} //complete method
// )
// }

//OR
obs.subscribe(val=>{
      console.log(val)
})

}
}