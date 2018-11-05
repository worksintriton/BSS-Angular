import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent {
  titles = [];
  datas: any;
  model1: form1model;
  adduser: Adduser;


  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router)  {
 
    this.adduser = new Adduser();
    }

    addapi(email_id){
      
      console.log(this.adduser);
      this.adduser.Add_by="BSS";
      this.http.post('https://bssservice.herokuapp.com/authentication/addusers', this.adduser).subscribe(data => {
      this.datas = data;
      console.log(this.datas);
      if(this.datas.data.message == "This Email_id already exits!"){
        alert(this.datas.data.message);
    }else{
        alert("Added Successfully");
    }
    });
    }
}
class form1model {
  name: string;
  mobile_number: string;
  email_id: string;
  password: string;
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