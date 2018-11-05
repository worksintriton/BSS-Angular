import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-employeetracking',
  templateUrl: './employeetracking.component.html',
  styleUrls: ['./employeetracking.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeetrackingComponent implements OnInit {
     // Map pointer coordinates
     lat = 40.730610;
     lng = -73.935242;

     
     mapdatas: any;
     datas:any;
    
 
     constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) {
     }
 
 
   ngOnInit() {
     this.http.post('https://bssservice.herokuapp.com/authentication/Trackinglist',	{"client_ID":"01"}).subscribe((data:any) => {
    this.datas = data.data;
    this.mapdatas = data.data;
       console.log(this.datas);
     });  
   }
 
  
 }
 
 

 
 
 
 