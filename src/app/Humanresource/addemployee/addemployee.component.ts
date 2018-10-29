import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';
import {formatDate } from '@angular/common';


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
      if(this.datas.status == "Success"){
        alert(" Add SuccessFully");
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

    Email_ID: string;
    Password: string;
    employee_type: string;
    employee_id: string;
    Name: string;
    father_name: string;
    Date_of_birth: string;
    gender: string;
    material_status: string;
    Edq: string;
    nationality: string;
    Address: string;
    Mobile_No: string;
    languages: string;
    work_exp: string;
    aadhar_card: string;
    date_joining: string;
    voter_id: string;
    driving_licence: string;
    attach: string;
    epn_no: string;
    epn_amount: string;
    esic_no: string;
    esic_amount: string;
    epf_no: string;
    epf_amount: string;
    mmspl_no: string;
    mmspl_amount: string;
    uan_no: string;
    uan_amount: string;
    pf_elegible: string;
    pf_amount: string;
    esi_elegible: string;
    esi_amount: string;
    professional_tax: string;
    professional_type: string;
    professional_amount: string;

  
}