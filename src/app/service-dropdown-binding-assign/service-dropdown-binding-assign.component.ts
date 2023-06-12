import { Component, OnInit } from '@angular/core';
import { DropdownBindingService } from '../service/dropdown-binding.service';

@Component({
  selector: 'app-service-dropdown-binding-assign',
  templateUrl: './service-dropdown-binding-assign.component.html',
  styleUrls: ['./service-dropdown-binding-assign.component.css']
})
export class ServiceDropdownBindingAssignComponent implements OnInit {
  statesArr: any = [];
  divisionsArr: any = [];
  districtsArr: any = [];
  talukasArr: any = [];
  villagesArr: any = [];

  formData: any = [];
  newArr: any = [];



  stateId: string = '';
  divisionId: string = '';
  districtId: string = '';
  talukaId: string = '';
  villageId: string = '';

  constructor(private dataBinding: DropdownBindingService) {}

  ngOnInit(): void {
    this.fetchStates();
    this.getDivisionByStateId();
    this.getDistrictByDivisionId();
    this.getTalukaByDistrictId();
    this.getVillageByTalukaId();
  }

  fetchStates() {
    this.dataBinding.getStates().subscribe((res: any) => {
      this.statesArr = res.responseData;
      console.log('get state list', this.statesArr);
    });
  }

  getDivisionByStateId() {
    this.dataBinding.getDivisions().subscribe((res: any) => {
      this.divisionsArr = res.responseData;
      console.log('get division list', this.divisionsArr);
    });
  }

  getDistrictByDivisionId() {
    this.dataBinding.getDistricts().subscribe((res: any) => {
      this.districtsArr = res.responseData;
      console.log('get district list', this.districtsArr);
    });
  }

  getTalukaByDistrictId() {
    this.dataBinding.getTalukas().subscribe((res: any) => {
      this.talukasArr = res.responseData;
      console.log('get taluka list', this.talukasArr);
    });
  }

  getVillageByTalukaId() {
    this.dataBinding.getVillages().subscribe((res: any) => {
      this.villagesArr = res.responseData;
      console.log('get village list', this.villagesArr);
    });
  }


  submitData(data: any) {
    console.log(data);
    this.formData.push(data.value);
    this.newArr = this.formData;

  }


  resetData(){
    this.formData.reset()
  }

  OnDelete(element){
this.formData.array.forEach((value,index) => {
  if(value==element)
  this.formData.splice(index,1);
});
  }


}
