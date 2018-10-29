import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-hrreportlist',
  templateUrl: './hrreportlist.component.html',
  styleUrls: ['./hrreportlist.component.scss']
})
export class HrreportlistComponent  {
  titles = [];
  datas: any;
  userid:string;
  moral:string;
  model: form1model;

  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) {
    
  }

  ngOnInit() {
    this.model = new form1model();
    this.http.post('https://bssservice.herokuapp.com/authentication/userlist', this.model).subscribe(data => {
      this.datas = data;
      console.log(data);
    });
    
    }

    public view(event, item) {
   
      this.router.navigate(['main/hrreport'])
    }
    
    public edit(event, item) {
    
      this.router.navigate(['main/hreditreort'])
    }

    public open($event, item){
      console.log(item.user_id);
      this.moral = (item.user_id);
      this.http.post('https://bssservice.herokuapp.com/authentication/deleteuser',{userid:this.moral}).subscribe(data  => {
      console.log(data);
      alert("User Deleted Successfull");
      this.ngOnInit();
      });
    }
}


class form1model {
  Email_id: "1";
}


