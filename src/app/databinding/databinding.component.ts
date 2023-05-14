import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  // one way data binding - string interpolation
  title = 'Password Generator';
  skills = 'HTML 5 ,CSS,JavaScript,TypeScript,Angular';
  myName = 'Ranjitsinh Gavali';

  myname: string = 'Rocky ';
  getName() {
    return this.myname;
  }

  imgurl = 'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg'

  changeImage(e) {
    this.imgurl = e.target.value;
    console.log('catch $event', e);
  }

  show() {
    alert('Button event raised');
  }

userName:string='Harry Potter';


  constructor() { }

  ngOnInit() {
  }

}
