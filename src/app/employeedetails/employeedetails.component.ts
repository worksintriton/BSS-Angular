import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.scss']
})
export class EmployeedetailsComponent implements OnInit {
  empid: string;
  datas: any; 
  public model: Adduser;
  public model1: Adduser1;







  constructor( private httpClient:HttpClient, private route: ActivatedRoute, private router: Router ) {
    this.model = new Adduser();
    this.model1 = new Adduser1();
    this.route.params.subscribe(params => {
     this.empid = params['id']; // (+) converts string 'id' to a number
     console.log('this id: ' + this.empid);
     this.httpClient.post('https://bssservice.herokuapp.com/authentication/employeeid',{empid:this.empid}).subscribe((data:any)  => {
      this.model = data.data;
      this.model1 = data.data1;

      console.log(this.model.Email_id);
      console.log(this.model1);
      });
  });
   }

  ngOnInit() {
    this.syncdata();
  }
  syncdata(){
    console.log("data in");
    
  }
  inprocess(){
    alert("No Document Added");
    
  }

  




}
class Adduser{
  Email_id: string;
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
class Adduser1{
  empid: string;
  ag_dayag_daughter: string;
  ag_residing_no: string;
  ag_witness1: string;
  ag_witness2: string;
  ag_place: string;
  ag_date: string;
  ag_day: string;
  ag_name: string;
  ag_father: string;
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
  Name: string;
  Father: string;
  Surname: string;
  Account_No: string;
  Addres_Per_Temp: string;
  Nominee_name: string;
  Address: string;
  Nominees_Relationship: string;
  Date_of_birth: string;
  Total_Amount_share: string;
  Total_Amount_minority: string;
  Date_of_Birth1: string;
  Gender1: string;
  Marital_Status1: string;
  Name_Of_the_Member: string;
  applicaple: string;
  Date_of_Birt: string;
  Gender: string;
  Marital_Status: string;
  Email_ID: string;
  Mobile_No: string;
  provident: string;
  pension: string;
  Universal_Account_Number: string;
  Pervious_PF_Account_Number: string;
  Date_of_Exit: string;
  Scheme_Certificate: string;
  Pension_Payment: string;
  International_Worker: string;
  country_of_orgin: string;
  Passport_No: string;
  Validity_Form: string;
  Validity_To: string;
  Bank_Name: string;
  Bank_Account_No: string;
  Bank_IFSC_Code: string;
  Aadhar_Number: string;
  Permanaet_Account: string;
}