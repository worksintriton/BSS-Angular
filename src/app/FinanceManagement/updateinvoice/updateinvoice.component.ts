import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';

import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-updateinvoice',
  templateUrl: './updateinvoice.component.html',
  styleUrls: ['./updateinvoice.component.scss']
})
export class UpdateinvoiceComponent implements OnInit {

 
  datas: any; 
  cliid:any;

  
  addempreq: Addclient;
  myform: FormGroup;
  billing_types: FormControl;
  created_bys: FormControl;
  Ref_nos:FormControl;
  customers:FormControl;
  titles:FormControl;
  descriptions:FormControl;
  payment_types:FormControl;
  payment_modes:FormControl;
  total_amounts:FormControl;
  paids:FormControl;
  balance_amounts:FormControl;
  statuss:FormControl;
  GSTs:FormControl;
  prof_taxs:FormControl;
  service_taxs:FormControl;



  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router)  {
    this.addempreq = new Addclient();
    this.route.params.subscribe(params => {
    
   //  this.email_id = params['id']; // (+) converts string 'id' to a number
   //  console.log('this id: ' + this.email_id);
    this.addempreq.cliid = params['id'];
    console.log(this.addempreq.cliid);
 });

  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.billing_types = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]);

    this.Ref_nos = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]);

    this.customers = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]);

    this.titles = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]);

    this.descriptions = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]);

    this.payment_types = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]);

    this.payment_modes = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]);

    this.total_amounts = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]);

    this.paids = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]);
    this.balance_amounts = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]);
    this.statuss = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]);
    this.GSTs = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]);

    this.prof_taxs = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]);

    this.service_taxs = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]);

    this.created_bys = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]);


  
  }


  createForm() {
    this.myform = new FormGroup({

      billing_types:this.billing_types,

      Ref_nos:this.Ref_nos,

      customers:this.customers,

      titles:this.titles,

      descriptions:this.descriptions,

      payment_types:this.payment_types,

      payment_modes:this.payment_modes,

      total_amounts:this.total_amounts,

      paids:this.paids,

      balance_amounts:this.balance_amounts,

      statuss:this.statuss,

      GSTs:this.GSTs,

      prof_taxs:this.prof_taxs,

      service_taxs:this.service_taxs,

      created_bys:this.created_bys,
    });
  }


  addapi(){

   this.router.navigate(['main/Financeinvoicebilling'])
  }

}

class Addclient{

  cliid: string;
 
  billing_type:string;
  created_by:string;
  Ref_no:string;
  customer:string;
  title:string;
  description:string;
  payment_type:string;
  payment_mode:string;
  total_amount:string;
  paid:string;
  balance_amount:string;
  status:string;
  GST:string;
  prof_tax:string;
  service_tax:string;




  

}
