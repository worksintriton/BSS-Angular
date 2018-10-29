import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-settraininglist',
  templateUrl: './settraininglist.component.html',
  styleUrls: ['./settraininglist.component.scss']
})
export class SettraininglistComponent implements OnInit {

  datas:any;
  viedos_id:string;

  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) { 
  }

  open($event, data){
   this.router.navigate(['main/settraininglessons/' + data.training_id])
  }


  ngOnInit() {
    this.http.post('https://bssservice.herokuapp.com/authentication/traininglist',{"emp_id":"1"}).subscribe((data:any) => {
      this.datas = data.traininglist;
      console.log(this.datas);
       });
  }

  public assign(title,description) {
    console.log("in");
    this.http.post('https://bssservice.herokuapp.com/authentication/training',{"title":title,"description":description}).subscribe((data:any)  => {
      console.log(data);
      alert(data.status);
      });
      this.ngOnInit();
  }

}
