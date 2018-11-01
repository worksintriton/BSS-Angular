import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.scss']
})
export class UpdateemployeeComponent implements OnInit {

  employee_id: string;
  datas: any; 
  public adduser: Adduser;







  constructor( private httpClient:HttpClient, private route: ActivatedRoute, private router: Router ) {
    this.adduser = new Adduser;
    this.route.params.subscribe(params => {
     this.employee_id = params['id']; // (+) converts string 'id' to a number
     console.log('this id: ' + this.employee_id);
     this.httpClient.post('https://bssservice.herokuapp.com/authentication/employee_id',{employee_id:this.employee_id}).subscribe((data:any)  => {
      this.adduser = data.data;
      console.log(this.adduser);
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