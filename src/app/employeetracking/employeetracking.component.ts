import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { MouseEvent } from '@agm/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';
import { numericIndexGetter } from '@swimlane/ngx-datatable/release/utils';

@Component({
  selector: 'app-employeetracking',
  templateUrl: './employeetracking.component.html',
  styleUrls: ['./employeetracking.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeetrackingComponent {
    // google maps zoom level
    zoom: number ;
    lat: number;
    lng: number;


    markers: marker[] = [
      // {
      //   lat: 13.067434,
      //   lng: 80.237617,
      //   label: 'A',
      //   draggable: true
      // },
      // {
      //   lat: 13.0444654,
      //   lng: 80.2130256,
      //   label: 'B',
      //   draggable: false
      // },
      // {
      //   lat: 13.0444656,
      //   lng: 80.2130248,
      //   label: 'C',
      //   draggable: true
      // },
      // {
      //   lat: 13.123421566371919,
      //   lng: 79.96563493021193,
      //   label: 'D',
      //   draggable: false
      // },
      // {
      //   lat: 13.0444654,
      //   lng: 80.2130256,
      //   label: 'E',
      //   draggable: false
      // },
      // {
      //   lat: ,
      //   lng: 78.67369651794434,
      //   label: 'F',
      //   draggable: false
      // },
    ];
datas:any;
    constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) {
      this.http.post('http://localhost/authentication/Trackingperson',{"Employee_id": "49"}).subscribe((data:any) => {
        this.datas = data.data;
      }); 
      this.ngOnInit();   
    }



    view($event, data){
      
    }


    ngOnInit() {
     this.datas.forEach(element => {
        this.zoom = 8 ;
        let d = {
        lat: +element.Lat,
        lng: +element.Long,
        Name: element.Name,
        draggable: true,
        }; 
        this.markers.push(d);
        console.log(this.markers)  
      });
      
      }

    
  
  


  
  
  
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
