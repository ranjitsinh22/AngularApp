import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RapidApiService {
  // rapidApiUrl = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=tesla&region=US';
  
  // headers = new HttpHeaders({
  //  'X-RapidAPI-Key': 'c2b090dad2mshb508a79e34cddcdp181128jsn4d12dd32b177',
  //  'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
  // })

  cricbuzzApi='https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent'

  cricbuzzHeader= new HttpHeaders({
    'X-RapidAPI-Key': '8c8fda3123msh86c0067e7cb287bp1b1b14jsn5ad074238cdb',
    'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
  })
  

  constructor(private httpClient: HttpClient) { }

 //yahoo finance
//   getDataYahooFinance() : Observable<any>  {
//     let params = new HttpParams();
//     params = params.append('q', 'tesla');
//     params = params.append('region', 'US');
//   return this.httpClient.get(this.rapidApiUrl, { headers: this.headers,params:params})
//  }
 
//cricbuzz assign

getCricbuzzData():Observable<any>{
  return this.httpClient.get(this.cricbuzzApi,{headers:this.cricbuzzHeader})
  
}






}
