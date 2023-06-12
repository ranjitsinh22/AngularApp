import { Component, OnInit } from '@angular/core';
import { RapidApiService } from '../service/rapid-api.service';

@Component({
  selector: 'app-rapid-api',
  templateUrl: './rapid-api.component.html',
  styleUrls: ['./rapid-api.component.css']
})
export class RapidApiComponent implements OnInit {

  matchesArr: any[] = [];

  constructor(private rapidApiService: RapidApiService) { }

  ngOnInit() {


   
  }










}
