import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {formatDate } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute ,Router} from '@angular/router';
import {Directive, ElementRef, Input} from '@angular/core';



@Component({
  selector: 'app-configurenumber',
  templateUrl: './configurenumber.component.html',
  styleUrls: ['./configurenumber.component.scss']
})
export class ConfigurenumberComponent implements OnInit {
  cliid:string;
  today = new Date();
  jstoday=""; 
  myform: FormGroup;


  Red_alerts: FormControl;
  Fire_alerts : FormControl;
  Ambulance_alerts: FormControl;
  Police_alerts:FormControl;
  client_IDs:FormControl;
  


  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }
  createFormControls() {
    
    this.Red_alerts = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]); 

    this.Fire_alerts = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]);

    this.Ambulance_alerts = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]); 

    this.Police_alerts = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]); 

    this.client_IDs = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]); 


  }
  createForm() {
    this.myform = new FormGroup({
     
      Red_alerts: this.Red_alerts,
      Fire_alerts: this.Fire_alerts,
      Ambulance_alerts: this.Ambulance_alerts,
      Police_alerts :this.Police_alerts,
      client_IDs :this.client_IDs,
   
    });
  }


  datas: any;
  addclient: Addclient;

  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) { 
    this.addclient = new Addclient();

    }
    addapi(){
      console.log(this.addclient);
      this.http.post('http://localhost/authentication/confignumber', this.addclient).subscribe(data => {
        this.datas = data;
        console.log(this.datas);
         this.cliid = this.datas.cliid;
        if(this.datas.status == "Success"){  
          alert("Added");
        }else{
          alert("Error Re-enter");
        }
      });
    }
}

class Addclient{
  Red_alert: number;
  Fire_alert: number;
  Ambulance_alert: number; 
  Police_alert:number;
  client_ID:string;
}
