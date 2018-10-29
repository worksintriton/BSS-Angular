import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-salesbilling',
  templateUrl: './salesbilling.component.html',
  styleUrls: ['./salesbilling.component.scss']
})
export class SalesbillingComponent implements OnInit {

  datas: any; 
  cliid:any;


  public model: Clientdetails;
  public model1: Clientdetails1;

  constructor( private httpClient:HttpClient, private route: ActivatedRoute, private router: Router ) {
    this.model = new Clientdetails();
    this.model1 = new Clientdetails1();

    this.route.params.subscribe(params => {
     this.cliid = params['id']; // (+) converts string 'id' to a number
     console.log('this id: ' + this.cliid);
     this.httpClient.post('https://bssservice.herokuapp.com/authentication/clientid',{cliid:this.cliid}).subscribe((data:any)  => {
      this.model = data.Client_details;
      this.model1 = data.Client_payment;
      console.log(this.model);
      console.log(this.model1);
      });
  });
   }


  ngOnInit() {
    


  }
  addapi(){
    alert("Successfully Send to approval");
    this.router.navigate(['main/clientmanagement'])
  }

}
class Clientdetails{




  User_name: string;
  Password: string;
  No_of_Sites: string;
  Client_Name: string;
  Address: string;
  Contact_Name: string;
  Contact_Number: string;
  E_mail_ID: string;
  Designations: string;
  Deployment: string;
  Hrs_pattern: string;
  RATES: string;
  Value: string;
  Allowance: string;
  Total_Allowances: string;
  Wages: string;
  Total_Wages: string;
  Add_Values: string;
  MARGIN: string;
  Contract_Start_Dates: string;
  Roc_date_Froms: string;
  ROC_to: string;
  Accts_Info: string;
  Invoice_cycle: string;
  Credit_Period: string;
  Aging_Analysis: string;
  Created_date: string;
  Updated_date: string;
  Updated_by: string;
 
}
class Clientdetails1{
cliid: string;
 
  No_am:number;
  No_as:number;
  No_s:number;

  shift_type:string;
  hour_type:string;
  payment_type:string;

  salary_am:number;
 
  over_time_am:number;


  salary_as:number;

  over_time_as:number;


  salary_s:number;
 
  over_time_s:number;


  total_amount:number;

  am_tot:number;
  as_tot:number;
  s_tot:number;

}