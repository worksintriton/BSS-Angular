import {Component, HostListener, OnInit, ViewEncapsulation} from '@angular/core';
import {ResizeService} from '../../resize/resize.service';
import {TranslateService} from '@ngx-translate/core';
import {routerTransition} from '../../utils/page.animation';
import {Router} from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { ActivatedRoute} from '@angular/router';
;

/**
 * This page wraps all other pages in application, it contains header, side menu and router outlet for child pages
 */
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [routerTransition],
  encapsulation: ViewEncapsulation.None
})
export class MainPageComponent {

  
  // Model for side menu
  menuModel = [
    {
      title: 'BSS Dashboard',
      routerUrl: '/main/dashboard',
      iconClass: 'material-icons',
      iconCode: 'dashboard',
    },


    {
      title: 'Employee Tracking',
      routerUrl: '/main/employeetracking',
      iconClass: 'material-icons',
      iconCode: 'dashboard',
    },
    
    {
      title: 'Operation Management',
      iconClass: 'material-icons',
      iconCode: 'payment',
      children: [
        {
          title: 'Complaints',
          iconClass: 'material-icons',
          // iconCode: 'work',
          routerUrl: '/main/Operationcomlist'
        },
        {
          title: 'Feedback',
          iconClass: 'material-icons',
          // iconCode: 'work',
          routerUrl: '/main/operationfeedlist',
        },
        {
          title: 'Training Materials',
          iconClass: 'material-icons',
          // iconCode: 'work',
          routerUrl: '/main/settraininglist',
        }
       
      ]
    },


    {
      title: 'User Management',
      iconClass: 'material-icons',
      iconCode: 'assignment_ind',
      children: [
        {
          title: 'View Users',
          iconClass: 'material-icons',
          // iconCode: 'work',
          routerUrl: '/main/viewuser'
        },
        {
          title: 'Add User',
          iconClass: 'material-icons',
          // iconCode: 'work',
          routerUrl: '/main/addusers',
        }
      ]
    },

    
  

    {
      title: 'Query Search',
      iconClass: 'material-icons',
      iconCode: 'assignment_ind',
      children: [
        {
          title: 'Search Employee',
          iconClass: 'material-icons',
          // iconCode: 'work',
          routerUrl: '/main/employeesearch'
        },
        {
          title: 'Search Client',
          iconClass: 'material-icons',
          // iconCode: 'work',
          routerUrl: '/main/clientsearch',
        }
      ]
    },




    {
      title: 'Finance Management',
      iconClass: 'material-icons',
      iconCode: 'assignment_ind',
      children: [
        {
          title: 'Accounts Management',
          iconClass: 'material-icons',
          // iconCode: 'work',
          routerUrl: '/main/Financeinvoicelist'
        },
        {
          title: 'Salary Payments',
          iconClass: 'material-icons',
          // iconCode: 'work',
          routerUrl: '/main/Financesalyear',
        },
        {
          title: 'Payments History',
          iconClass: 'material-icons',
          // iconCode: 'work',
          routerUrl: '/main/FinanceyearComponent',
        }
      ]
    },
    
    {
      title: 'Human Resoucre',
      iconClass: 'material-icons',
      iconCode: 'assignment_ind',
      children: [
        {
          title: 'Employee Management',
          iconClass: 'material-icons',
          iconCode: 'radio_button_checked',
          children: [
        {
          title: 'View Employees',
          iconClass: 'material-icons',
          // iconCode: 'work',
          routerUrl: '/main/viewemployees'
        },
        {
          title: 'New Employee',
          iconClass: 'material-icons',
          // iconCode: 'work',
          routerUrl: '/main/addemployee',
        }
      ]
    },
    {
      title: 'Assign Management',
      iconClass: 'material-icons',
      iconCode: 'radio_button_checked',
      children: [
        {
          title: 'View Assign',
          iconClass: 'material-icons',
          // iconCode: 'work',
          routerUrl: '/main/hrassignemployeelist',
        },
        {
          title: 'New Assign',
          iconClass: 'material-icons',
          // iconCode: 'work',
          routerUrl: '/main/hrassignemployee',
        }
      ]
    },

     {
      title: 'Report Management',
      iconClass: 'material-icons',
      iconCode: 'radio_button_checked',
      children: [
    {
      title: 'Report List',
      iconClass: 'material-icons',
      // iconCode: 'work',
      routerUrl: '/main/hrreportlist'
    },
    {
      title: 'New Report',
      iconClass: 'material-icons',
      // iconCode: 'work',
      routerUrl: '/main/hrnewreport',
    }
  ]
     },
     {
      title: 'Client List',
      iconClass: 'material-icons',
      iconCode: 'radio_button_checked',
      // iconCode: 'work',
      routerUrl: '/main/hrviewclient'
    },
    {
      title: 'Attendence Management',
      routerUrl: '/main/hrattendance',
      iconClass: 'material-icons',
      iconCode: 'event_available'
    },
      ]
    },

/////////////
    {
      title: 'Sales Team',
      iconClass: 'material-icons',
      iconCode: 'assignment_ind',
      children: [
        {
          title: 'Client Management',
          iconClass: 'material-icons',
          iconCode: 'radio_button_checked',
          children: [
        {
          title: 'View Client',
          iconClass: 'material-icons',
          // iconCode: 'work',
          routerUrl: '/main/clientmanagement'
        },
        {
          title: 'New Client',
          iconClass: 'material-icons',
          // iconCode: 'work',
          routerUrl: '/main/addclient',
        }
      ]
    },
    {
      title: 'Contract Management',
      iconClass: 'material-icons',
      iconCode: 'radio_button_checked',
      children: [
        {
          title: 'View Contracts',
          iconClass: 'material-icons',
          // iconCode: 'work',
          routerUrl: '/main/salescontractlist',
        },
        {
          title: 'New Contracts',
          iconClass: 'material-icons',
          // iconCode: 'work',
          routerUrl: '/main/salesnewcontract',
        }
      ]
    },

     {
      title: 'Notification',
      iconClass: 'material-icons',
      iconCode: 'radio_button_checked',
      children: [
    {
      title: 'Viewed Notice',
      iconClass: 'material-icons',
      // iconCode: 'work',
      routerUrl: '/main/salesnotification'
    },
    {
      title: 'New Notice',
      iconClass: 'material-icons',
      // iconCode: 'work',
      // routerUrl: '/main/hrnewreport',
    },
  ]
     },
     {
      title: 'Client history',
      iconClass: 'material-icons',
      iconCode: 'radio_button_checked',
      // iconCode: 'work',
      routerUrl: '/main/salesclienthistory'
    },
    {
      title: 'Configure Number',
      iconClass: 'material-icons',
      iconCode: 'radio_button_checked',
      // iconCode: 'work',
      routerUrl: '/main/Configurenumber',
    }
      ]
    },

  ];
  // Side menu options
  isSmallMenuMode = false;
  isMenuCollapsed = false;
  isMenuClosed = this.isSmallWidth();
  isOverlayMenuMode = this.isSmallWidth();
  // Side menu animation value. Is used for delay to render content after side panel changes
  sideNavTransitionDuration = 300;
  // Open/close options window
  isOptionsClosed = true;
  // Box layout option
  isBoxedLayout = false;
  // Fixed header option
  isFixedHeader = true;

  constructor(private resizeService: ResizeService, translateService: TranslateService, private router: Router) {
    this.onResize();
    // this language will be used as a fallback when a translation isn't found in the current language
    translateService.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translateService.use('en');

  
  }
  

  /**
   * Window resize listener
   */
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.resizeService.resizeInformer$.next();
    if (this.isSmallWidth()) {
      this.isOverlayMenuMode = true;
      this.isMenuClosed = true;
      setTimeout(() => this.resizeService.resizeInformer$.next(), this.sideNavTransitionDuration + 700);
    }
  }

  /**
   * Call resize service after side panel mode changes
   */
  onSideNavModeChange() {
    setTimeout(() => {
      this.resizeService.resizeInformer$.next();
    }, this.sideNavTransitionDuration)
  }

  ngOnInit(): void {
  }


  addapi1(){
  alert("No Notification Found");
  }
  /**
   * Call resize service after box mode changes
   */
  toggleBoxed() {
    this.isBoxedLayout = !this.isBoxedLayout;
    setTimeout(() => {
      this.resizeService.resizeInformer$.next()
    }, 0);
  }

  toggleCompactMenu() {
    this.isSmallMenuMode = !this.isSmallMenuMode;
    setTimeout(() => {
      this.resizeService.resizeInformer$.next()
    }, this.sideNavTransitionDuration);
  }

  /**
   * Call resize service after side panel mode changes
   */
  toggleOverlayMode() {
    this.isOverlayMenuMode = !this.isOverlayMenuMode;
    setTimeout(() => {
      this.resizeService.resizeInformer$.next()
    }, this.sideNavTransitionDuration);
  }

  /**
   * Changes header mode
   */
  toggleFixedHeader() {
    this.isFixedHeader = !this.isFixedHeader;
  }

  /**
   * Return url as state, that will trigger animation when url changes
   * @param outlet
   * @returns {string}
   */
  getState(outlet) {
    return this.router.url;
  }

  private isSmallWidth() {
    return window.innerWidth < 700;
  }
}
