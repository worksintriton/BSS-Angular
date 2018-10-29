import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hrnewreport',
  templateUrl: './hrnewreport.component.html',
  styleUrls: ['./hrnewreport.component.scss']
})
export class HrnewreportComponent implements OnInit {
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
      console.log(item.empid);
      this.router.navigate(['main/'])
    }
    public edit(event, item) {
      console.log(item.empid);
      this.router.navigate(['main/updateemployee/' + item.empid])
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

