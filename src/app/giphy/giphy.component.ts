import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../service/giphy.service';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {
  gifs: any[] = [];
  searchTerm: string = '';

  constructor(private gifService: GiphyService) {}

  ngOnInit() {
    this.gifService.getGIF().subscribe((res: any) => {
      this.gifs = res.data.map((item: any) => item.images);
      console.log('giphy data',res);
      
    });
  }

  onSearchClick() {
    this.gifService.searchTerm = this.searchTerm;
    this.gifService.searchGifs().subscribe((response: any) => {
      this.gifs = response.data.map((item: any) => item.images);
    });
  }



}
