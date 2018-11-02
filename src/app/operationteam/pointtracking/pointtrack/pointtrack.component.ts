import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router'
import { DatePipe } from '@angular/common';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-pointtrack',
  templateUrl: './pointtrack.component.html',
  styleUrls: ['./pointtrack.component.scss']
})
export class PointtrackComponent implements OnInit {

  datas:any[];
  Employee_data:any;
  Employee_name:string;
  Employee_id:string;
  create_date:any;
  update_date:any;
  model: form1model;
  mappoint_id:string;
  Points:any;

  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router,private datePipe: DatePipe) { 
    this.model = new form1model();
    this.Points=[];
    this.Employee_data=[];
  }
  ngOnInit() {
    this.http.post('https://bssservice.herokuapp.com/PointTracking/pointslist',{"Employee_id":"1"}).subscribe((data:any) => {
      this.datas = data.data;     
      console.log(this.datas);
    });
    this.http.post('https://bssservice.herokuapp.com/authentication/employeelist',{"Email_id": "1"}).subscribe((data:any) => {
      this.Employee_data = data.data;     
      console.log(this.Employee_data);
    });
  }

  assign(employees,titles,Descriptions){
    console.log(employees);
    this.http.post('http://localhost/authentication/employee_id',{"employee_id": employees }).subscribe((data:any) => {
    this.Employee_name = data.data.Name; 
    var stringForm = data.data.id.toString();
    this.Employee_id = stringForm;
    console.log(this.Employee_name);
    if( this.Employee_name ===""){
          alert("retry later");
    }else{
      this.assign2(this.Employee_id,this.Employee_name,titles,Descriptions);
    }
   });
  }

  assign2(Employee_id,employees,titles,Descriptions){
  var date = new Date();
   this.create_date=(this.datePipe.transform(date,"yyyy-MM-dd"));
   this.update_date=(this.datePipe.transform(date,"yyyy-MM-dd")); //output : 2018-02-13
    this.http.post('https://bssservice.herokuapp.com/PointTracking/Addpoints',{"Emp_id":Employee_id,"Employee_id": employees,"created_date": this.create_date,"mapdescription": Descriptions,"maptitle": titles,"updated_date": this.update_date,"status":"Open"}).subscribe((data:any) => {
    alert("Added Successfully");
    this.ngOnInit();
    });
  }


  edit(event,data){
    var stringForm = data.mappoint_id.toString();
    this.mappoint_id = stringForm;
    this.create_date = data.created_date;
     this.http.post('https://bssservice.herokuapp.com/PointTracking/fetchpoints',{"mappoint_id":this.mappoint_id}).subscribe((data:any) => {
     this.Points = data.data[0];     
     console.log(this.Points.Employee_id);
     });
   }


   delete(event,data){
    var stringForm = data.mappoint_id.toString();
    this.mappoint_id = stringForm;
    this.http.post('https://bssservice.herokuapp.com/PointTracking/deletepoints',{"mappoint_id":this.mappoint_id}).subscribe((data:any) => {
    alert("Deleted Successfully");
    this.ngOnInit();
    });
  }

  assign1(employee,title,Description,status){
   var date = new Date();
   this.update_date=(this.datePipe.transform(date,"yyyy-MM-dd")); //output : 2018-02-13
   this.http.post('https://bssservice.herokuapp.com/PointTracking/pointsupdate',{"Employee_id": employee,"mapdescription": Description,"maptitle": title,"updated_date": this.update_date,"status":status,"mappoint_id":this.mappoint_id}).subscribe((data:any) => {
    alert("Updated Successfully");
    this.ngOnInit();
    });
  }

}



class form1model {
  Email_id: "1";
}
