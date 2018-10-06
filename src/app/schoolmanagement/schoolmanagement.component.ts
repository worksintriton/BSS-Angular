import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-schoolmanagement',
  templateUrl: './schoolmanagement.component.html',
  styleUrls: ['./schoolmanagement.component.scss']
})
export class SchoolmanagementComponent  implements OnInit {
 
  titles = [];
  datas: any;
  cliid:string;
  model: form1model;

  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) {
    this.model = new form1model();
    
  }

  ngOnInit() {
    this.http.post('http://localhost/authentication/clientlist', this.model).subscribe(data => {
      this.datas = data;
      console.log(data);
    });
    
    }

    public view(event, item) {
      console.log(item.cliid);
      this.router.navigate(['main/clientdetails/' + item.cliid])
    }
    
    public edit(event, item) {
      console.log(item.cliid);
      this.router.navigate(['main/updateclient/' + item.cliid])
    }

    public open($event, item){
      console.log(item.cliid);
      this.http.post('https://bssservice.herokuapp.com/authentication/deleteclient',{cliid:item.cliid}).subscribe(data  => {
      console.log(data);
      alert("Deleted Successfully");
      this.ngOnInit();
      });



    }
}


class form1model {
  Email_id: "1";
}

