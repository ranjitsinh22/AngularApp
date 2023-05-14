import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {
  people:any[] = [
    {
      "name": 'Jack',
      "country": 'UK'
    },
    {
      "name": 'Sumit',
      "country": 'USA'
    },
    {
      "name": 'Anup',
      "country": 'HK'
    },
    {
      "name": 'codemind',
      "country": 'UK'
    },
    {
      "name": 'surya',
      "country": 'USA'
    },
    {
      "name": 'Rocky',
      "country": 'HK'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
