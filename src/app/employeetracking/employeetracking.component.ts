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
     datas: any;
     Datum: Datum;
     maplist:Maplist;
 
     constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) {
       this.maplist = new Maplist();  
       
     }
  select(tlat, tlon){
     console.log('sdfsdf');
     this.lat = tlat;
     this.lng = tlon;
 
   }
 
   ngOnInit() {
     this.http.post('https://bssservice.herokuapp.com/authentication/Trackinglist',	{"client_ID":"01"}).subscribe(data => {
       this.maplist = <Maplist>data;
       console.log(data);
       this.select(this.maplist.data[0].Lat, this.maplist.data[0].Long);
     });  
   }
 
  
 }
 
 class Datum {
     Employee_id: string;
     Lat: string;
     Long: string;
     updated_at: string;
     Name: string;
 }
 
  class Maplist {
     data: Datum[];
     status: string;
     code: number;
 }
 
 