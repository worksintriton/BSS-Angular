import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';
import {formatDate } from '@angular/common';

import { SchoolsService } from '../schools.service';

import {NgbCalendar, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
const now = new Date();
const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one && two && two.year === one.year && two.month === one.month && two.day === one.day;

const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day < two.day : one.month < two.month : one.year < two.year;

const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day > two.day : one.month > two.month : one.year > two.year;

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent {


  // Model for basic datepicker
  basicModel: NgbDateStruct;
  basicDate: { year: number, month: number };
  // Model for datepicker with popup
  popupModel;
  // Model for multi month datepicker
  displayMonths = 1;
  navigation = 'select';
  // Model for range selection
  hoveredDate: NgbDateStruct;
  fromDate: NgbDateStruct;
  toDate: NgbDateStruct;
  // Model for disabled datepiker
  disabledModel: NgbDateStruct = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  disabled = true;



  titles = [];
  datas: any;
  email_id:any;
  adduser: Adduser;


  today = new Date();
  jstoday=""; 

  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router,calendar: NgbCalendar) {

    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);

    this.adduser = new Adduser();
    // this.no_of_sites = '';
    
    this.http.get('https://api.github.com/users/vishnuvigneshwar').subscribe(data => {
      this.datas = data;
      console.log(data);
      });

      this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
      // this.addclient.created_date =  this.jstoday;

      
    }


    ngOnInit() {
    }
    selectToday() {
      this.basicModel = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
    }


    addapi(){
      console.log(this.adduser);
      this.http.post('https://bssservice.herokuapp.com/authentication/addemployee', this.adduser).subscribe(data => {
      this.datas = data;
      console.log(this.datas);
      alert(this.datas.data.message);
      this.email_id = (this.datas.id);
      if(this.datas.data.message == "Employee Details add Successfully"){
        this.router.navigate(['main/addemployee1/' + this.email_id])
      }else{
      }
     
      });
    }


// Methods for range selection
isHovered = date => this.fromDate && !this.toDate && this.hoveredDate && after(date, this.fromDate) && before(date, this.hoveredDate);

isInside = date => after(date, this.fromDate) && before(date, this.toDate);

isFrom = date => equals(date, this.fromDate);

isTo = date => equals(date, this.toDate);

onDateChange(date: NgbDateStruct) {
  if (!this.fromDate && !this.toDate) {
    this.fromDate = date;
  } else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
    this.toDate = date;
  } else {
    this.toDate = null;
    this.fromDate = date;
  }
}


}



class Adduser{
  
  user_name: string;
  Password: string;
  Designation: string;
  Company: string;
  Employee_No: string;
  Rank: string;
  Name: string;
  Father_Name: string;
  Date_Of_Birth: string;
  Gender: string;
  Marital_Status: string;
  contact_details: string;
  Educational_Qualification: string;
  Nationality: string;
  Permanent_Address: string;
  Local_Address: string;
  Contact_No: string;
  Languages_Known: string;
  Work_Experience: string;
  EPF_No: string;
  ESIC_No: string;
  Aadhar_Card_No: string;
  Signature_of_the_manager: string;
  Signature_of_the_Applicant: string;
  BSS_EPF_Number: string;
  BSSPL_EPF_Number: string;
  MMSPL_EPF_Number: string;
  UAN_Number: string;
  Date_Of_Joining: string;
  Date_Of_Relieving: string;
  Voter_ID: string;
  Driving_Licence_Number: string;
  PF_Elegible: string;
  ESI_Elegible: string;
  Professional_Tax: string;
  Working_Status: string;
  Emi: string;

}