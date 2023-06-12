import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// export class MyserviceService {
export class userDataService {
  // constructor(private ) { }

  PrintFile(){
    alert('File Printed Successfully')
  }

  GetData(){
    console.log('Get Data in Service')
  }


  //keep common code in service 

showAge;

ageCalculator(age: any) {
  if (age) {
    const convertAge = new Date(age);
    const timeDiff = Math.abs(Date.now() - convertAge.getTime());
    return this.showAge = Math.floor(timeDiff/(1000*3600*24)/ 365);
  }
  
}



//Dependency injection



}