import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {

  userid: string;
  datas: any; 
  public model: Adduser;

  constructor( private httpClient:HttpClient, private route: ActivatedRoute, private router: Router ) {
    this.model = new Adduser();
    this.route.params.subscribe(params => {
     this.userid = params['id']; // (+) converts string 'id' to a number
     console.log('this id: ' + this.userid);
     this.httpClient.post('https://bssservice.herokuapp.com/authentication/userid',{userid:this.userid}).subscribe((data:any)  => {
      this.model = data.data[0];
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
    this.httpClient.post('https://bssservice.herokuapp.com/authentication/updateusers',this.model).subscribe(data => {
    this.datas = data;
    alert("Updated Successfully")
    console.log(data);
    });
  }
}

class Adduser{
  Employee_ID: string;
  Name: string;
  Designation: string;
  Level: string;
  Phone_number: string;
  Email_id: string;
  Password: string;
  Add_by: string;
}