import { Component, OnInit ,ViewEncapsulation} from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
