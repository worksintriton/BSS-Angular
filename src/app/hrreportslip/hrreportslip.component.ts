import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hrreportslip',
  templateUrl: './hrreportslip.component.html',
  styleUrls: ['./hrreportslip.component.scss']
})
export class HrreportslipComponent implements OnInit {

  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }
  addapi(){
    alert("Sended Successfully");
    this.router.navigate(['main/hrreportlist'])
  }
}
