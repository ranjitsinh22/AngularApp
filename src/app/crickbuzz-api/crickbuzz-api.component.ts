import { Component, OnInit } from '@angular/core';
import { RapidApiService } from '../service/rapid-api.service';

@Component({
  selector: 'app-crickbuzz-api',
  templateUrl: './crickbuzz-api.component.html',
  styleUrls: ['./crickbuzz-api.component.css']
})
export class CrickbuzzApiComponent implements OnInit {
  matchesInfo: any[] = [];
  matchInfoNew: any[] = [];

  constructor(private rapidApiService: RapidApiService) { }

  ngOnInit() {

    this.rapidApiService.getCricbuzzData().subscribe(res => {
      for (let val of res.typeMatches) {

        for (let match of val.seriesMatches) {

          if (match.seriesAdWrapper != undefined) {

            for (let matchinfo of match.seriesAdWrapper.matches) {
              console.log('get cricbuzz data ', matchinfo.matchInfo);
             this.matchesInfo=matchinfo.matchInfo;
            }
          }
        }
      }
    });
  }

}
