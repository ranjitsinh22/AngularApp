import { Component, OnInit } from '@angular/core';
import { CricketinfoService } from '../service/cricketinfo.service';

@Component({
  selector: 'app-cricketinfo',
  templateUrl: './cricketinfo.component.html',
  styleUrls: ['./cricketinfo.component.css']
})
export class CricketinfoComponent implements OnInit {

  counter=1;
  venue;
  matchInfo;
  team1;
  team2;
  constructor(private cricketService: CricketinfoService) { }

  ngOnInit() {
    //  this.getData();
    this.cricketService.getInfo().subscribe( (res:any) => {
      console.log('getting data from rapid API ', res);
       console.log(res);
       this.venue = res.venueInfo;
       this.matchInfo = res.matchInfo;
       this.team1 = this.matchInfo.team1;
       this.team2 = this.matchInfo.team2;
       console.log("Team 1", this.team1);
       console.log("Team 2", this.team2);


})
}

}
