import { Component, OnInit } from '@angular/core';
import { movie } from '../model/movie';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
title:string='Top 3 Bollywood Movies';
  movies:movie[]=[
    { title:'3 idiot', director:'Rajkumar Hirani',cast:'Amir Khan',releaseDate:'2009'},
    { title:'lagaan', director:'Ashutosh Govarikar',cast:'Amir Khan',releaseDate:'2000'},
    { title:'Golmaal', director:'Rohit Shetty',cast:'Ajay Devgan',releaseDate:'2015'}
  ]

constructor() { }

  ngOnInit() {
  }

}
