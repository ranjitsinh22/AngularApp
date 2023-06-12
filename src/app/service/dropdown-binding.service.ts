import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DropdownBindingService {
  
  createList() {
    throw new Error('Method not implemented.');
  }
  stateUrl = 'http://awsmaster.mahamining.com/master/states/GetState';
  divisionUrl = 'http://awsmaster.mahamining.com/master/divisions/1'    //1 for maharashtra
  districtUrl = 'http://awsmaster.mahamining.com/master/districts/GetDistrictByDivisionId?UserId=1&DivisionId=1';
  talukaUrl = 'http://awsmaster.mahamining.com/master/talukas/GetTalukaByDistrictId/1';
  villageUrl = 'http://awsmaster.mahamining.com/master/villages/GetVillagesByCriteria/1';

  constructor(private http: HttpClient) { }

  //get data form api
  getStates() {
    return this.http.get(this.stateUrl);
  }

  getDivisions() {
    return this.http.get(this.divisionUrl);
  }

  getDistricts() {
    return this.http.get(this.districtUrl);
  }

  getTalukas() {
    return this.http.get(this.talukaUrl);
  }

  getVillages() {
    return this.http.get(this.villageUrl);
  }
}
