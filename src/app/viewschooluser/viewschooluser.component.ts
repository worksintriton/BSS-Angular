import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { SchoolsService } from '../schools.service';
import { ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-viewschooluser',
  templateUrl: './viewschooluser.component.html',
  styleUrls: ['./viewschooluser.component.scss']
})

export class ViewschooluserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}