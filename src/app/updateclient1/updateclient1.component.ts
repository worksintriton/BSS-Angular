import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';

import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-updateclient1',
  templateUrl: './updateclient1.component.html',
  styleUrls: ['./updateclient1.component.scss']
})
export class Updateclient1Component implements OnInit {
  datas: any; 
  cliid:any;


  public model: Addclient;

  myform: FormGroup;
  No_ams:FormControl;
  No_ass:FormControl;
  No_ss:FormControl;
  shift_types:FormControl;
  hour_types:FormControl;
  payment_types:FormControl;
  salary_ams:FormControl;
  salary_ass:FormControl;
  salary_ss:FormControl;
  over_time_ams:FormControl;
  over_time_ass:FormControl;
  over_time_ss:FormControl;


  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router)  {
    this.model = new Addclient();
    this.route.params.subscribe(params => {
     this.model.cliid = params['id']; // (+) converts string 'id' to a number
     console.log('this id: ' +  this.model.cliid);
     this.http.post('http://localhost/authentication/clientid',{cliid:this.model.cliid}).subscribe((data:any)  => {
      this.model = data.Client_payment;
      console.log(this.model);
      });
  });

  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.No_ams = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]);

    this.No_ass = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]);

    this.No_ss = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]);

    this.shift_types = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]);

    this.hour_types = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]);

    this.payment_types = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]);

    this.salary_ams = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]);

    this.salary_ass = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]);

    this.salary_ss = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]);
    this.over_time_ams = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]);
    this.over_time_ass = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]);
    this.over_time_ss = new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]);
  }


  createForm() {
    this.myform = new FormGroup({

      No_ams:this.No_ams,

      No_ass:this.No_ass,

      No_ss:this.No_ss,

      shift_types:this.shift_types,

      hour_types:this.hour_types,

      payment_types:this.payment_types,

      salary_ams:this.salary_ams,

      salary_ss:this.salary_ss,

      salary_ass:this.salary_ass,

      over_time_ams:this.over_time_ams,

      over_time_ass:this.over_time_ass,

      over_time_ss:this.over_time_ss,
    });
  }



  addapi(){

    let a = (50 * this.model.salary_am )/100;
    this.model.am_bss = a ;
    console.log(this.model.am_bss);

    let b = (50 * this.model.salary_am )/100;
    this.model.am_employee = b ;
    console.log(this.model.am_employee);

    let c = this.model.salary_am/30;
    this.model.am_30days = c ;
    console.log(this.model.am_30days);

    let d = this.model.salary_am/31;
    this.model.am_31days = d ;
    console.log(this.model.am_31days);

    let  e = this.model.salary_am/28;
    this.model.am_28days = e ;
    console.log(this.model.am_28days);

    let  f = this.model.salary_am/29;
    this.model.am_29days = f ;
    console.log(this.model.am_29days);

    let g = (50 * this.model.over_time_am)/100;
    this.model.am_ot_bss = g ;
    console.log(this.model.am_ot_bss);

    let h = (50 * this.model.over_time_am)/100;
    this.model.am_ot_employee = h ;
    console.log(this.model.am_ot_employee);

    let a1 = (50 * this.model.salary_as)/100;
    this.model.as_bss = a1 ;
    console.log(this.model.as_bss);

    let b1 = (50 * this.model.salary_as)/100;
    this.model.as_employee = b1 ;
    console.log(this.model.as_employee);

    let c1 = this.model.salary_as/30;
    this.model.as_30days = c1 ;
    console.log(this.model.as_30days);

    let d1 = this.model.salary_as/31;
    this.model.as_31days = d1 ;
    console.log(this.model.as_31days);

    let  e1 = this.model.salary_as/28;
    this.model.as_28days = e1 ;
    console.log(this.model.as_28days);

    let  f1 = this.model.salary_as/29;
    this.model.as_29days = f1 ;
    console.log(this.model.as_29days);

    let g1 = (50 * this.model.over_time_as)/100;
    this.model.as_ot_bss = g1 ;
    console.log(this.model.as_ot_bss);

    let h1 = (50 * this.model.over_time_as)/100;
    this.model.as_ot_employee = h1 ;
    console.log(this.model.as_ot_employee);

    let a2 = (50 * this.model.salary_s )/100;
    this.model.s_bss = a2 ;
    console.log(this.model.s_bss);

    let b2 = (50 * this.model.salary_s )/100;
    this.model.s_employee = b2 ;
    console.log(this.model.s_employee);

    let c2 = this.model.salary_s/30;
    this.model.s_30days = c2 ;
    console.log(this.model.s_30days);

    let d2 = this.model.salary_s/31;
    this.model.s_31days = d2 ;
    console.log(this.model.s_31days);

    let  e2 = this.model.salary_s/28;
    this.model.s_28days = e2 ;
    console.log(this.model.s_28days);

    let  f2 = this.model.salary_s/29;
    this.model.s_29days = f2 ;
    console.log(this.model.s_29days);

    let g2 = (50 * this.model.over_time_s)/100;
    this.model.s_ot_bss = g2 ;
    console.log(this.model.s_ot_bss);

    let h2 = (50 * this.model.over_time_s)/100;
    this.model.s_ot_employee = h2 ;
    console.log(this.model.s_ot_employee);

   let tot =  ( this.model.salary_am + this.model.salary_as + this.model.salary_s);
   this.model.total_amount = tot ; 
   console.log(this.model.total_amount);

   let am_tot = ( this.model.salary_am * this.model.No_am )
   this.model.am_tot = am_tot ; 
   console.log(this.model.am_tot);

   let as_tot = ( this.model.salary_as * this.model.No_as )
   this.model.as_tot = as_tot ; 
   console.log(this.model.as_tot);

   let s_tot =  ( this.model.salary_s * this.model.No_s ) 
   this.model.s_tot = s_tot ; 
   console.log(this.model.s_tot);
  
   let aa = (this.model.salary_am);
   this.model.s_tot = aa ; 

   let bb = (this.model.salary_as);
   this.model.s_tot = bb ; 

   let cc = (this.model.salary_s);
   this.model.s_tot = cc ; 

   let dd = (this.model.total_amount);
   this.model.s_tot = dd ; 

   let ee = (this.model.over_time_s);
   this.model.s_tot = ee ; 

   let ff = (this.model.over_time_as);
   this.model.s_tot = ff ; 

   let gg = (this.model.over_time_am);
   this.model.s_tot = gg ; 

   let ii = (this.model.No_am);
   this.model.s_tot = ii ; 

   let hh = (this.model.No_as);
   this.model.s_tot = hh ; 

   let jj = (this.model.No_s);
   this.model.s_tot = jj ; 



    console.log(this.model.No_am);
    console.log(this.model.No_as);
    console.log(this.model.No_s);
    
    console.log(this.model.shift_type);
    console.log(this.model.hour_type);
    console.log(this.model.payment_type);





    // this.cliid = (this.model.cliid);
    // console.log(this.cliid);
    // console.log(this.model);
    // this.http.post('http://localhost/authentication/addclients1',this.model).subscribe(data => {
    //   this.datas = data;
    //   console.log(this.datas);
    //   console.log(this.datas.status);
      // if(this.datas.status == "Success"){
      //   console.log("this is my"+this.cliid);
      //   alert("Update Successfully");
        this.router.navigate(['main/salesbilling/'+this.cliid])
      // }else{


      // }
      // });
   
  }

}

class Addclient{

  cliid: string;
 
  No_am:number;
  No_as:number;
  No_s:number;

  shift_type:string;
  hour_type:string;
  payment_type:string;

  salary_am:number;
  am_bss:number;
  am_employee:number;
  am_30days:number;
  am_31days:number;
  am_28days:number;
  am_29days:number;
  over_time_am:number;
  am_ot_bss:number;
  am_ot_employee:number;

  salary_as:number;
  as_bss:number;
  as_employee:number;
  as_30days:number;
  as_31days:number;
  as_28days:number;
  as_29days:number;
  over_time_as:number;
  as_ot_bss:number;
  as_ot_employee:number;

  salary_s:number;
  s_bss:number;
  s_employee:number;
  s_30days:number;
  s_31days:number;
  s_28days:number;
  s_29days:number;
  over_time_s:number;
  s_ot_bss:number;
  s_ot_employee:number;

  total_amount:number;

  am_tot:number;
  as_tot:number;
  s_tot:number;

}
