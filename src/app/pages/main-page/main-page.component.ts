import {Component, HostListener, OnInit, ViewEncapsulation} from '@angular/core';
import {ResizeService} from '../../resize/resize.service';
import {TranslateService} from '@ngx-translate/core';
import {routerTransition} from '../../utils/page.animation';
import {Router} from '@angular/router';

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
export class MainPageComponent implements OnInit {
  // Model for side menu
  menuModel = [
    {
      title: 'BSS Dashboard',
      routerUrl: '/main/dashboard',
      iconClass: 'material-icons',
      iconCode: 'dashboard',
    },
    
    {
      title: 'Payroll Management',
      iconClass: 'material-icons',
      iconCode: 'payment',
      children: [
        {
          title: 'Pay process',
          iconClass: 'material-icons',
          // iconCode: 'work',
          routerUrl: '/main/opertionteamComplaint'
        },
        {
          title: 'Pay Details',
          iconClass: 'material-icons',
          // iconCode: 'work',
          routerUrl: '/main/adduser',
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
      title: 'Attendence Management',
      routerUrl: '/main/datepicker',
      iconClass: 'material-icons',
      iconCode: 'event_available'
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
    }
  ]
     },
     {
      title: 'Client history',
      iconClass: 'material-icons',
      iconCode: 'radio_button_checked',
      // iconCode: 'work',
      routerUrl: '/main/salesclienthistory'
    },
      ]
    },

    // {
    //   title: 'Components',
    //   iconClass: 'material-icons',
    //   iconCode: 'view_module',
    //   children: [
    //     {
    //       title: 'Tooltip',
    //       routerUrl: '/main/tooltip'
    //     },
    //     {
    //       title: 'Dropdown',
    //       routerUrl: '/main/dropdown'
    //     },
    //     {
    //       title: 'Table',
    //       routerUrl: '/main/table'
    //     },
    //     {
    //       title: 'Datepicker',
    //       routerUrl: '/main/datepicker'
    //     },
    //     {
    //       title: 'Timepicker',
    //       routerUrl: '/main/timepicker'
    //     },
    //     {
    //       title: 'Rating',
    //       routerUrl: '/main/rating'
    //     },
    //     {
    //       title: 'Pagination',
    //       routerUrl: '/main/pagination'
    //     },
    //     {
    //       title: 'Modal',
    //       routerUrl: '/main/modal'
    //     },
    //     {
    //       title: 'Popover',
    //       routerUrl: '/main/popover'
    //     },
    //     {
    //       title: 'Progress bar',
    //       routerUrl: '/main/progressbar'
    //     },
    //     {
    //       title: 'Badge',
    //       routerUrl: '/main/badge'
    //     },
    //     {
    //       title: 'Other',
    //       routerUrl: '/main/other'
    //     }
    //   ]
    // },
    // {
    //   title: 'Forms',
    //   iconClass: 'material-icons',
    //   iconCode: 'subject',
    //   children: [
    //     {
    //       title: 'Buttons',
    //       routerUrl: '/main/buttons'
    //     },
    //     {
    //       title: 'Inputs',
    //       routerUrl: '/main/form-elements'
    //     }
    //   ]
    // },

    // {
    //   title: 'E-commerce',
    //   iconClass: 'material-icons',
    //   iconCode: 'shopping_cart',
    //   children: [
    //     {
    //       title: 'Products',
    //       routerUrl: '/main/products'
    //     },
    //     {
    //       title: 'Product page',
    //       routerUrl: '/main/product-details'
    //     },
    //     {
    //       title: 'Cart',
    //       routerUrl: '/main/cart'
    //     },
    //     {
    //       title: 'Pricing Tables',
    //       routerUrl: '/main/pricing-tables'
    //     },
    //     {
    //       title: 'Contacts',
    //       routerUrl: '/main/contact'
    //     }

    //   ]
    // },
    // {
    //   title: 'Extra',
    //   iconClass: 'material-icons',
    //   iconCode: 'work',
    //   children: [
    //     {
    //       title: 'Grid table',
    //       routerUrl: '/main/component-table',
    //     },
    //     {
    //       title: 'Slider',
    //       routerUrl: '/main/slider'
    //     },
    //     {
    //       title: 'Tree',
    //       routerUrl: '/main/tree',
    //     },
    //     {
    //       title: 'Gallery',
    //       routerUrl: '/main/gallery'
    //     },
    //     {
    //       title: 'Editor',
    //       routerUrl: '/main/editor'
    //     },
    //     {
    //       title: 'Drag & Drop',
    //       routerUrl: '/main/drag'
    //     },
    //     {
    //       title: 'Multi language',
    //       routerUrl: '/main/translate'
    //     },
    //     {
    //       title: 'Scroll',
    //       routerUrl: '/main/scroll'
    //     }
    //   ]
    // },
    // {
    //   title: 'Charts',
    //   iconClass: 'material-icons',
    //   iconCode: 'assessment',
    //   children: [
    //     {
    //       title: 'Line charts',
    //       routerUrl: '/main/linechart',
    //     },
    //     {
    //       title: 'Bar charts',
    //       routerUrl: '/main/barchart',
    //     },
    //     {
    //       title: 'Pie charts',
    //       routerUrl: '/main/piechart',
    //     },
    //     {
    //       title: 'Bubble charts',
    //       routerUrl: '/main/bubblechart',
    //     },
    //     {
    //       title: 'Heatmap',
    //       routerUrl: '/main/heatmap',
    //     },
    //     {
    //       title: 'Radar',
    //       routerUrl: '/main/radar',
    //     }
    //   ]
    // },
   // {
     // title: 'Maps',
    //  iconClass: 'material-icons',
    //  iconCode: 'place',

      // children: [
      //   {
      //     title: 'Google Maps',
      //     routerUrl: '/main/google-map',
      //   },
      //   {
      //     title: 'Data Maps',
      //     routerUrl: '/main/data-maps',
      //   }
      // ]
   // },
    // {
    //   title: 'Label',
    //   count: 10,
    //   iconClass: 'material-icons',
    //   iconCode: 'label',
    //   routerUrl: '',
    //   children: []
    // },
    // {
    //   title: 'Multilevel',
    //   iconClass: 'material-icons',
    //   iconCode: 'clear_all',
    //   children: [
    //     {
    //       title: 'Level 1',
    //       children: [
    //         {
    //           title: 'Level 2',
    //         },
    //         {
    //           title: 'Level 2',
    //         },
    //         {
    //           title: 'Level 2',
    //         },
    //       ]
    //     },
    //     {
    //       title: 'Level 1',
    //     },
    //     {
    //       title: 'Level 1',
    //     },
    //   ]
    // },
    // {
    //   title: 'Buy Sofu',
    //   iconClass: 'material-icons',
    //   iconCode: 'star',
    //   externalUrl: 'https://themeforest.net/item/sofu-angular-5-bootstrap-4-admin-template/21363343',
    //   children: []
    // }
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
