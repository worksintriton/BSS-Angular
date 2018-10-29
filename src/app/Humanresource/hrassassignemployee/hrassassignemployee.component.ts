import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-hrassassignemployee',
  templateUrl: './hrassassignemployee.component.html',
  styleUrls: ['./hrassassignemployee.component.scss']
})
export class HrassassignemployeeComponent implements OnInit {
  titles = [];
  datas: any;
  empid:string;
  model: form1model;

  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) {
    this.model = new form1model();
    this.http.post('https://bssservice.herokuapp.com/authentication/employeelist', this.model).subscribe(data => {
      this.datas = data;
      console.log(data);
    });
  }

  ngOnInit() {
    
    }

    addapi(){
       alert("Added successfully to client");
 
    }

    public view(event, item) {
      console.log(item.empid);
      this.router.navigate(['main/employeedetails/' + item.empid])
    }
    
    public edit(event, item) {
      console.log(item.empid);
      this.router.navigate(['main/updateemployee/' + item.empid])
    }

    public open($event, item){
      console.log(item.empid);
      this.http.post('https://bssservice.herokuapp.com/authentication/deleteemployee',{empid:item.empid}).subscribe(data  => {
      console.log(data);
      });
    }
}
class form1model {
  Email_id: "1";
}


