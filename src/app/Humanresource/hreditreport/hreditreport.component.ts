import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hreditreport',
  templateUrl: './hreditreport.component.html',
  styleUrls: ['./hreditreport.component.scss']
})
export class HreditreportComponent implements OnInit {

  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
  
  }

  addapi(){
    this.router.navigate(['main/hrreportslip'])
  }

}
