import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-state',
  templateUrl: './country-state.component.html',
  styleUrls: ['./country-state.component.css']
})
export class CountryStateComponent implements OnInit {
  countryList: Array<any> = [
    { name: 'India', states: ['Maharashtra', 'Gujarat', 'Punjab'] },
    { name: 'USA', states: ['Texas','Florida','California'] },
  ];
  states: Array<any>;
  changeCountry(count) {
    this.states = this.countryList.find(con => con.name == count).states;
  }
  constructor() { }

  ngOnInit() {
  }

}
