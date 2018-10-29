import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-salesclienthistory',
  templateUrl: './salesclienthistory.component.html',
  styleUrls: ['./salesclienthistory.component.scss']
})
export class SalesclienthistoryComponent implements OnInit {
  
  titles = [];
  datas: any;
  cliid:string;
  model: form1model;

  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) {
    this.model = new form1model();
    this.http.post('https://bssservice.herokuapp.com/authentication/clientlist', this.model).subscribe(data => {
      this.datas = data;
      console.log(data);
    });
  }

  ngOnInit() {
    
    }

    public view(event, item) {
      console.log(item.cliid);
      this.router.navigate(['main/clienthistoryview'])
    }
    
    

    



    
}


class form1model {
  Email_id: "1";
}

