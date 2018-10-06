import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.scss']
})
export class UpdateuserComponent implements OnInit {
  userid: string;
  datas: any; 
  public model: Adduser;







  constructor( private httpClient:HttpClient, private route: ActivatedRoute, private router: Router ) {
    this.model = new Adduser;
    this.route.params.subscribe(params => {
     this.userid = params['id']; // (+) converts string 'id' to a number
     console.log('this id: ' + this.userid);
     this.httpClient.post('https://bssservice.herokuapp.com/authentication/userid',{userid:this.userid}).subscribe((data:any)  => {
      this.model = data.data;
      console.log(this.model);
      });
  });
   }

  ngOnInit() {
    this.syncdata();
  }
  syncdata(){
    console.log("data in");
    
  }

  addapi(){
    console.log(this.model);
    console.log("in");
    this.httpClient.post('https://bssservice.herokuapp.com/authentication/updateemplo',this.model).subscribe(data => {
    this.datas = data;
    alert("Updated Successfully")
    console.log(data);
    });
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