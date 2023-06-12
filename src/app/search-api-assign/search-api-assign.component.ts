import { Component, OnInit } from '@angular/core';
import { SearchApiService } from '../service/search-api.service';

@Component({
  selector: 'app-search-api-assign',
  templateUrl: './search-api-assign.component.html',
  styleUrls: ['./search-api-assign.component.css']
})
export class SearchApiAssignComponent implements OnInit {
  searchQuery: string;
  searchData: any = {};

  constructor(private wikiService: SearchApiService) { }

  ngOnInit() {
    // Initialize the searchQuery
    this.searchQuery = '';
    this.fetchData();
  }

  fetchData() {
    this.wikiService.getData(this.searchQuery).subscribe(
      (response) => {
        this.searchData = response;
        console.log(this.searchData);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  search() {
    this.fetchData();
  }



}
