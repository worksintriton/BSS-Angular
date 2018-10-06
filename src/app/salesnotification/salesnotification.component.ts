import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';

import { SalesnotificationService } from './salesnotification.service';

@Component({
  selector: 'app-salesnotification',
  templateUrl: './salesnotification.component.html',
  styleUrls: ['./salesnotification.component.scss']
})
export class SalesnotificationComponent implements OnInit {

  private title: string = 'Browser Push Notifications!';
  constructor(private _notificationService: SalesnotificationService) {
      this._notificationService.requestPermission();
  }
  ngOnInit() {}
  notify() {
      let data: Array < any >= [];
      data.push({
          'title': 'Approval',
          'alertContent': 'This is First Alert -- By Debasis Saha'
      });
      data.push({
          'title': 'Request',
          'alertContent': 'This is Second Alert -- By Debasis Saha'
      });
      data.push({
          'title': 'Leave Application',
          'alertContent': 'This is Third Alert -- By Debasis Saha'
      });
      data.push({
          'title': 'Approval',
          'alertContent': 'This is Fourth Alert -- By Debasis Saha'
      });
      data.push({
          'title': 'To Do Task',
          'alertContent': 'This is Fifth Alert -- By Debasis Saha'
      });
      this._notificationService.generateNotification(data);
  }
}