import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-hrassignemployeelist',
  templateUrl: './hrassignemployeelist.component.html',
  styleUrls: ['./hrassignemployeelist.component.scss']
})
export class HrassignemployeelistComponent implements OnInit {
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

    public view(event, item) {
      console.log(item.empid);
      this.router.navigate(['main/hrviewassignemployee'])
    }
    
    public edit(event, item) {
      console.log(item.empid);
      this.router.navigate(['main/hreditassignemployee'])
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

