import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';
@Component({
  selector: 'app-viewemployees',
  templateUrl: './viewemployees.component.html',
  styleUrls: ['./viewemployees.component.scss']
})
export class ViewemployeesComponent {

  titles = [];
  datas: any;
  empid:string;
  model: form1model;
  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) {
    this.model = new form1model();  
  }
  ngOnInit() {
    this.http.post('https://bssservice.herokuapp.com/authentication/employeelist', this.model).subscribe(data => {
      this.datas = data;
      console.log(data);
    });   
    }
    public view(event, item) {
      console.log(item.id);
      this.router.navigate(['main/employeedetails/' + item.id])
    }
    public edit(event, item) {
      console.log(item.id);
      this.router.navigate(['main/updateemployee/' + item.id])
    }
    public open($event, item){
      console.log(item.empid);
      this.http.post('https://bssservice.herokuapp.com/authentication/deleteemployee',{empid:item.empid}).subscribe(data  => {
      console.log(data);
      alert("Employee deleted Successfully");
      this.ngOnInit();
      });
    }
}


class form1model {
  Email_id: "1";
}

