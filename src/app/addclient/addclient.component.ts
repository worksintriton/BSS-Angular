import { NgModule,Pipe,Component, OnInit ,Attribute} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {formatDate } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute ,Router} from '@angular/router';
import {Directive, ElementRef, Input} from '@angular/core';
import * as Inputmask from 'inputmask';



@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.scss']
})
export class AddclientComponent implements OnInit{

    
  cliid:string;
  today = new Date();
  jstoday=""; 
  myform: FormGroup;


  SL_NO: FormControl;
  Client_Names : FormControl;
  No_of_Sitess: FormControl;
  Addresss:FormControl;
  Contact_Names:FormControl;
  Contact_Nos:FormControl;
  E_Mail_IDs: FormControl;
  Designationss:FormControl;

  Deployments:FormControl;

  Hrs_patterns:FormControl;

  RATESs:FormControl;

  Values:FormControl;

  Allowances:FormControl;
  
  Total_Allowances:FormControl;

  Wagess:FormControl;

  Total_Wagess:FormControl;

  Add_Values:FormControl;

  MARGINs:FormControl;

  Contract_Start_Dates:FormControl;

  Roc_date_Froms:FormControl;

  ROC_tos:FormControl;

  Signed_by_clients:FormControl;

  Accts_Infos:FormControl;

  Invoice_cycles:FormControl;

  Credit_Periods:FormControl;

  Aging_Analysiss:FormControl;

  user_names:FormControl;

  passwords:FormControl;


  
  


  

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }
  createFormControls() {
    
    this.SL_NO = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]); 

    this.Client_Names = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]);

    this.No_of_Sitess = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]); 

    this.Addresss = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]); 

    this.Contact_Names = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]); 

    this.Contact_Nos = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]); 

    this.E_Mail_IDs = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]); 


    this.Designationss = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]); 

    this.Deployments = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]); 

    this.Hrs_patterns = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]); 

    this.RATESs = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]); 

    this.Values = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]); 

    this.Allowances = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]); 

    this.Total_Allowances = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]); 

    this.Wagess = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]); 

    this.Total_Wagess = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]); 


    this.Add_Values = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]); 


    this.MARGINs = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]); 


    this.Contract_Start_Dates = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]); 


    this.Roc_date_Froms = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]); 

    this.ROC_tos = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]); 


    this.Signed_by_clients = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]); 


    this.Accts_Infos = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]); 


    this.Invoice_cycles = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]); 

    this.Credit_Periods = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]); 


    this.Aging_Analysiss = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]); 

    this.user_names = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]); 


    this.passwords = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]); 



    

    

    





  }
  createForm() {
    this.myform = new FormGroup({
     
    
      Client_Names: this.Client_Names,
      No_of_Sitess: this.No_of_Sitess,
      Addresss :this.Addresss,
      Contact_Names :this.Contact_Names,
      Contact_Nos: this.Contact_Nos,
      E_Mail_IDs:this.E_Mail_IDs,
      Designationss:this.Designationss,
      Deployments:this.Deployments,
      Hrs_patterns:this.Hrs_patterns,
      RATESs:this.RATESs,
      Values:this.Values,
      Allowances:this.Allowances,
      Total_Allowances:this.Total_Allowances,
      Wagess:this.Wagess,
      Total_Wagess:this.Total_Wagess, 
      Add_Values:this.Add_Values,
      MARGINs:this.MARGINs,
      Contract_Start_Dates:this.Contract_Start_Dates,
      Roc_date_Froms:this.Roc_date_Froms,
      ROC_tos:this.ROC_tos,
      Signed_by_clients:this.Signed_by_clients,
      Accts_Infos:this.Accts_Infos,
      Invoice_cycles:this.Invoice_cycles,
      Credit_Periods:this.Credit_Periods,
      Aging_Analysiss:this.Aging_Analysiss,  
      passwords:this.passwords,
      user_names:this.user_names,

    });
  }


  datas: any;
  addclient: Addclient;

  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) { 
    this.addclient = new Addclient();
    
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    this.addclient.Created_date =  this.jstoday;
    this.addclient.Updated_date =  this.jstoday;
 



    console.log(this.addclient.Created_date);
    }


    addapi(){
      console.log(this.addclient);
      this.http.post('https://bssservice.herokuapp.com/authentication/addclients', this.addclient).subscribe(data => {
        this.datas = data;
        console.log(this.datas);
        alert(this.datas.data.message);
         this.cliid = this.datas.cliid;
        if(this.datas.data.message == "Client Details add Successfully"){
          this.router.navigate(['main/salesnewcontract/' + this.cliid])                      
        }else{


        }
      });
    }
}



class Addclient{



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
 

}
