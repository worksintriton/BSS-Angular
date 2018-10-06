import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-components-page',
  templateUrl: './other-components-page.component.html',
  styleUrls: ['./other-components-page.component.scss']
})
export class OtherComponentsPageComponent implements OnInit {

  // Model fora collapse example
  isCollapsed = false;

  constructor() { }

  ngOnInit() {
  }

}
