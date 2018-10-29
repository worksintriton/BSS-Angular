import {Component, OnInit, ViewEncapsulation,Inject} from '@angular/core';

import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';

import Amplify from 'aws-amplify';
import Auth from '@aws-amplify/auth';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginPageComponent {
user_name:string;

datas: any;

adduser: Adduser;


constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router)  {
  this.adduser = new Adduser();
  this.adduser.Email_id="";
  this.adduser.password="";

}
addapi(Email_id,password){
      console.log(this.adduser);
      this.adduser.Email_id=Email_id;
      this.adduser.password=password;
      this.http.post('https://bssservice.herokuapp.com/authentication/bsslogin', this.adduser).subscribe(data => {
      this.datas = data;
      console.log(this.datas);
      if(this.datas.data == "Invalid Account"){
        alert(this.datas.data);
    }else{
        alert("Login Successfully");
        this.router.navigate(['mainpage'])
    }
    });
    }
}

class Adduser{
  Email_id: string;
  password: string;
}

