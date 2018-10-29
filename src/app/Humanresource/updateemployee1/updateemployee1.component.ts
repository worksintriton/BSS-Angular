import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-updateemployee1',
  templateUrl: './updateemployee1.component.html',
  styleUrls: ['./updateemployee1.component.scss']
})
export class Updateemployee1Component implements OnInit {

  datas: any;  
  email_id:any;
  adduser: Adduser;

  constructor( private http:HttpClient, private route: ActivatedRoute, private router: Router ) {
    this.adduser = new Adduser();
     this.route.params.subscribe(params => {
    //  this.email_id = params['id']; // (+) converts string 'id' to a number
    //  console.log('this id: ' + this.email_id);
     this.adduser.empid = params['id'];
     console.log(this.adduser.empid);
     
  });
   }

  ngOnInit() {
    
  }
     addapi(){

        alert("Updated Succesfully");
        this.router.navigate(['main/viewemployees'])

}
}



class Adduser{
  empid: string;
    Written_work: string;
    Appearance: string;
    First_impression: string;
    Result: string;
    Designation: string;
    Entry: string;
    To_be_Posted_to: string;
    Receipt_No_Date: string;
    Amount: string;
    Med: string;
    Shoes: string;
    Id_card: string;
    N_Tab: string;
    Receipt_No_Date_1: string;
    Date_1: string;
    Amount_1: string;
    Dues_1: string;
    Receipt_No_Date_2: string;
    Date_2: string;
    Amount_2: string;
    trainess_Expenses_2: string;
    Dues_2: string;
    Blood_Pressure: string;
    Cardio_Vascular_System: string;
    Respiratory_System: string;
    Eyes_Vision: string;
    Genitals: string;
    Other_Feature: string;
    Remarks_of_medical_officer: string;
    T_No: string;
    Batch_No: string;
    IC_No: string;
    Date_of_Appt: string;
    Basic: string;
}
