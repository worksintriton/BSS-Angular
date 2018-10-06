import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { StepId } from 'aws-sdk/clients/emr';
import { stat } from 'fs';



@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.scss']
})

export class TestpageComponent {
  name:string = '';
  age:number;
  message:string;
  code:string;
  status:string;
  found:boolean;

  constructor(private httpClient:HttpClient){  }
  onNameKeyUp(event:any){
    this.name = event.target.value;
    this.found = false;
  }
  getProfile(){
    this.httpClient.post(`https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/?name=${this.name}`,{})
    .subscribe(
      (data:any[]) => {
        if(data.length) {
          this.age = data[0].age;
          this.found = true;
        }
      }
    )
  }

  postProfile(name, mobile_number, email_id, password){
    this.httpClient.post(`http://localhost/authentication/registerpage`,
    {
      name: name,
      mobile_number: mobile_number,
      email_id: email_id,
      password: password
    })
    .subscribe(
      (data:any) => {
        console.log(data);
        this.status = data;
        alert(data[0].message)
        // this.found = true;
      }
    )
  }

}

