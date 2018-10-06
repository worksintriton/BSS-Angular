import { ViewschooluserComponent } from './../viewschooluser/viewschooluser.component';
import { UpdateschoolComponent } from './../updateschool/updateschool.component';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NgModule, ChangeDetectionStrategy} from '@angular/core';
import {DashboardPageComponent} from '../pages/dashboard-page/dashboard-page.component';
import {TypographyPageComponent} from '../pages/typography-page/typography-page.component';
import {DropdownPageComponent} from '../pages/dropdown-page/dropdown-page.component';
import {LoginPageComponent} from '../pages/login-page/login-page.component';
import {FormElementsPageComponent} from '../pages/form-elements-page/form-elements-page.component';
import {ButtonsPageComponent} from '../pages/buttons-page/buttons-page.component';
import {MainPageComponent} from '../pages/main-page/main-page.component';
import {RegisterPageComponent} from '../pages/register-page/register-page.component';
import {ComingSoonPageComponent} from '../pages/coming-soon-page/coming-soon-page.component';
import {MaintenancePageComponent} from '../pages/maintenance-page/maintenance-page.component';
import {NotFoundPageComponent} from '../pages/not-found-page/not-found-page.component';
import {ProductsPageComponent} from '../pages/products-page/products-page.component';
import {OtherComponentsPageComponent} from '../pages/other-components-page/other-components-page.component';
import {ProductDetailsPageComponent} from '../pages/product-details-page/product-details-page.component';
import {TabsPageComponent} from '../pages/tabs-page/tabs-page.component';
import {GalleryPageComponent} from '../pages/gallery-page/gallery-page.component';
import {CartPageComponent} from '../pages/cart-page/cart-page.component';
import {PricingTablesPageComponent} from '../pages/pricing-tables-page/pricing-tables-page.component';
import {ListPageComponent} from '../pages/list-page/list-page.component';
import {ProfilePageComponent} from '../pages/profile-page/profile-page.component';
import {RatingPageComponent} from '../pages/rating-page/rating-page.component';
import {GoogleMapPageComponent} from '../pages/google-map-page/google-map-page.component';
import {ContactPageComponent} from '../pages/contact-page/contact-page.component';
import {CardsPageComponent} from '../pages/cards-page/cards-page.component';
import {BarchartPageComponent} from '../pages/barchart-page/barchart-page.component';
import {LineChartPageComponent} from '../pages/line-chart-page/line-chart-page.component';
import {PieChartPageComponent} from '../pages/pie-chart-page/pie-chart-page.component';
import {BubbleChartPageComponent} from '../pages/bubble-chart-page/bubble-chart-page.component';
import {HeatMapPageComponent} from '../pages/heat-map-page/heat-map-page.component';
import {RadarPageComponent} from '../pages/radar-page/radar-page.component';
import {TablePageComponent} from '../pages/table-page/table-page.component';
import {AccordionPageComponent} from '../pages/accordion-page/accordion-page.component';
import {DatepickerPageComponent} from '../pages/datepicker-page/datepicker-page.component';
import {ModalPageComponent} from '../pages/modal-page/modal-page.component';
import {PaginationPageComponent} from '../pages/pagination-page/pagination-page.component';
import {PopoverPageComponent} from '../pages/popover-page/popover-page.component';
import {ProgressbarPageComponent} from '../pages/progressbar-page/progressbar-page.component';
import {TimepickerPageComponent} from '../pages/timepicker-page/timepicker-page.component';
import {TooltipPageComponent} from '../pages/tooltip-page/tooltip-page.component';
import {GridPageComponent} from '../pages/grid-page/grid-page.component';
import {BadgePageComponent} from '../pages/badge-page/badge-page.component';
import {IconsPageComponent} from '../pages/icons-page/icons-page.component';
import {DataMapsPageComponent} from '../pages/data-maps-page/data-maps-page.component';
import {TranslatePageComponent} from '../pages/translate-page/translate-page.component';
import {ScrollPageComponent} from '../pages/scroll-page/scroll-page.component';
import { SchoolmanagementComponent } from '../schoolmanagement/schoolmanagement.component';


import { AssignusertoschoolComponent } from '../assignusertoschool/assignusertoschool.component';

import { UpdateuserComponent } from '../updateuser/updateuser.component';
import { ForgotpswdComponent } from '../pages/forgotpswd/forgotpswd.component';
import { ChangepaswordComponent } from '../pages/changepasword/changepasword.component';
import { AssingComponent } from '../assing/assing.component';
import { ViewassignComponent } from '../viewassign/viewassign.component';

import { IssuesComponent } from '../issues/issues.component';
import { ClientissuesComponent } from '../clientissues/clientissues.component';

import { UpdateissuesComponent } from '../updateissues/updateissues.component';
import { UpdateclientissuesComponent } from '../updateclientissues/updateclientissues.component';

import { ViewuserComponent } from '../viewuser/viewuser.component';

import { ViewclientdetailComponent } from '../viewclientdetail/viewclientdetail.component';

import { EditclientComponent } from '../editclient/editclient.component';
import { ViewemployeesComponent } from '../viewemployees/viewemployees.component';
import { EmployeedetailsComponent } from '../employeedetails/employeedetails.component';
import { EditemployeeComponent } from '../editemployee/editemployee.component';
import { ViewusersComponent } from '../viewusers/viewusers.component';
import { EditusersComponent } from '../editusers/editusers.component';
import { AddclientComponent } from '../addclient/addclient.component';
import { TestpageComponent } from '../testpage/testpage.component';
import { Test1Component } from '../test1/test1.component';
import { UpdateclientComponent } from '../updateclient/updateclient.component';
import { UpdateemployeeComponent } from '../updateemployee/updateemployee.component';
import { AddemployeeComponent } from '../addemployee/addemployee.component';
import { AdduserComponent } from '../adduser/adduser.component';
import { UserdetailsComponent } from '../userdetails/userdetails.component';
import { HumanresoucesComponent } from '../humanresouces/humanresouces.component';
import { HrreportlistComponent } from '../hrreportlist/hrreportlist.component';
import { HrnewreportComponent } from '../hrnewreport/hrnewreport.component';
import { HreditreportComponent } from '../hreditreport/hreditreport.component';
import { HrviewclientComponent } from '../hrviewclient/hrviewclient.component';
import { HrreportslipComponent } from '../hrreportslip/hrreportslip.component';
import { HrreportComponent } from '../hrreport/hrreport.component';
import { HrassassignemployeeComponent } from '../hrassassignemployee/hrassassignemployee.component';
import { HrassignemployeelistComponent } from '../hrassignemployeelist/hrassignemployeelist.component';
import { HreditassignemployeeComponent } from '../hreditassignemployee/hreditassignemployee.component';
import { HrviewassignemployeeComponent } from '../hrviewassignemployee/hrviewassignemployee.component';
import { SalesnewcontractComponent } from '../salesnewcontract/salesnewcontract.component';
import { SalescontractlistComponent } from '../salescontractlist/salescontractlist.component';
import { SaleseditcontractComponent } from '../saleseditcontract/saleseditcontract.component';
import { SalesbillingComponent } from '../salesbilling/salesbilling.component';
import { SalespipelineComponent } from '../salespipeline/salespipeline.component';
import { SalesnotificationComponent } from '../salesnotification/salesnotification.component';

import { SalesviewnoticeComponent } from '../salesviewnotice/salesviewnotice.component';
import { SalesclienthistoryComponent } from '../salesclienthistory/salesclienthistory.component';
import { ClienthistoryviewComponent } from '../clienthistoryview/clienthistoryview.component';
import { Addemployeepg1Component } from '../addemployeepg1/addemployeepg1.component';
import { Addemployeepg2Component } from '../addemployeepg2/addemployeepg2.component';
import { Addemployeepg3Component } from '../addemployeepg3/addemployeepg3.component';
import { Updateemployee1Component } from '../updateemployee1/updateemployee1.component';
import { Updateclient1Component } from '../updateclient1/updateclient1.component';
import { OpertionteamComplaintComponent } from '../opertionteam-complaint/opertionteam-complaint.component';
import { OpertionteamComplaintviewComponent } from '../opertionteam-complaintview/opertionteam-complaintview.component';
import { OpertionteamfeedbackComponent } from '../opertionteamfeedback/opertionteamfeedback.component';
import { OpertionteamfeedbackviewComponent } from '../opertionteamfeedbackview/opertionteamfeedbackview.component';









// Routes model for application. Some of the pages are loaded lazily to increase startup time.
const APP_ROUTES: Routes = [
  {
    path: 'main', component: MainPageComponent, children: [
      {path: 'dashboard', component: DashboardPageComponent},
      {path: 'testpage', component: TestpageComponent},
      {path: 'issues', component: IssuesComponent},
     { path: 'viewemployees', component: ViewemployeesComponent},
     { path: 'employeedetails', component: EmployeedetailsComponent},
     { path: 'editemployee', component: EditemployeeComponent},
      


     {path: 'hrassignemployee', component: HrassassignemployeeComponent},
     {path: 'hrassignemployeelist', component: HrassignemployeelistComponent},
     {path: 'hreditassignemployee', component: HreditassignemployeeComponent},
     {path: 'hrviewassignemployee', component: HrviewassignemployeeComponent},
     {path: 'humanresource', component: HumanresoucesComponent},
     {path: 'hrreportlist', component: HrreportlistComponent},
     {path: 'hrnewreport', component: HrnewreportComponent},
     {path: 'hreditreport', component: HreditreportComponent},
     {path: 'hrviewclient', component: HrviewclientComponent},
     {path: 'hrreportslip', component: HrreportslipComponent},
     {path: 'hreditreort', component: HreditreportComponent},
     {path: 'hrreport', component: HrreportComponent},




     {path: 'salesnewcontract/:id', component: SalesnewcontractComponent},   
     {path: 'salescontractlist', component: SalescontractlistComponent},
     {path: 'saleseditcontract', component: SaleseditcontractComponent},
     {path: 'salesbilling/:id', component: SalesbillingComponent},
     {path: 'salespipeline', component: SalespipelineComponent}, 
     {path: 'salesnotification', component: SalesnotificationComponent},
     {path: 'salesviewnotice', component: SalesviewnoticeComponent},
     {path: 'clienthistoryview', component: ClienthistoryviewComponent},
     {path: 'salesclienthistory', component: SalesclienthistoryComponent},

     {path: 'addemployee1/:id', component: Addemployeepg1Component},
     {path: 'addemployee2/:id', component: Addemployeepg2Component},
     {path: 'addemployee3/:id', component: Addemployeepg3Component},
   


     
     { path: 'viewusers', component: ViewusersComponent},
     { path: 'editusers', component: EditusersComponent},
     { path: 'test1', component: Test1Component},
      
      {path: 'clientissues', component: ClientissuesComponent},
    
    
      {path: 'assign', component: AssingComponent},
      {path: 'viewassign', component: ViewassignComponent},
     
      {path: 'clientmanagement', component: SchoolmanagementComponent},
   
      {path: 'assignusertoschool', component: AssignusertoschoolComponent},
      
      {path: 'addclient', component: AddclientComponent},

      {path: 'addemployee', component: AddemployeeComponent},
      {path: 'schoolmanagement', component: TypographyPageComponent},
      {path: 'dropdown', component: DropdownPageComponent},
      {path: '', component: LoginPageComponent},
      {path: 'viewuser', component: ViewuserComponent},
      {path: 'addusers', component: AdduserComponent},
      {path: 'form-elements', component: FormElementsPageComponent},
   
      {path: 'updateissues/:id', component: UpdateissuesComponent},
      {path: 'updateclientissues/:id', component: UpdateclientissuesComponent},
   
      {path: 'viewuserschool', component: ViewschooluserComponent},
      {path: 'product-details', component: ProductDetailsPageComponent},
      {path: 'tabs', component: TabsPageComponent},
      {path: 'gallery', component: GalleryPageComponent},
      {path: 'cart', component: CartPageComponent},
      {path: 'pricing-tables', component: PricingTablesPageComponent},
      {path: 'lists', component: ListPageComponent},
      {path: 'profile', component: ProfilePageComponent},
      {path: 'rating', component: RatingPageComponent},
      {path: 'google-map', component: GoogleMapPageComponent},
      {path: 'contact', component: ContactPageComponent},
      {path: 'cardspages', component: CardsPageComponent},
      {path: 'barchart', component: BarchartPageComponent},
      {path: 'linechart', component: LineChartPageComponent},
      {path: 'piechart', component: PieChartPageComponent},
      {path: 'bubblechart', component: BubbleChartPageComponent},
      {path: 'heatmap', component: HeatMapPageComponent},
      {path: 'radar', component: RadarPageComponent},
      {path: 'table', component: TablePageComponent},
      {path: 'accordion', component: AccordionPageComponent},
      
      {path: 'clientdetails/:id', component: ViewclientdetailComponent},
      {path: 'updateclient/:id', component: UpdateclientComponent},
      {path: 'updateclient1/:id', component: Updateclient1Component},
      
      {path: 'employeedetails/:id', component: EmployeedetailsComponent},
      {path: 'updateemployee/:id', component: UpdateemployeeComponent},
      {path: 'updateemployee1/:id', component: Updateemployee1Component},

      {path: 'userdetails/:id', component: UserdetailsComponent},
      {path: 'updateuser/:id', component: UpdateuserComponent},


      {path: 'opertionteamComplaint', component: OpertionteamComplaintComponent},
      {path: 'opertionteamComplaintview', component: OpertionteamComplaintviewComponent},
      {path: 'opertionteamfeedback', component: OpertionteamfeedbackComponent},
      {path: 'opertionteamfeedbackview', component: OpertionteamfeedbackviewComponent},









      {path: 'editclientdetails', component: EditclientComponent},
      {path: 'employye', component: DatepickerPageComponent},
      {path: 'datepicker', component: DatepickerPageComponent},
      {path: 'modal', component: ModalPageComponent},
      {path: 'pagination', component: PaginationPageComponent},
      {path: 'popover', component: PopoverPageComponent},
      {path: 'progressbar', component: ProgressbarPageComponent},
      {path: 'timepicker', component: TimepickerPageComponent},
      {path: 'tooltip', component: TooltipPageComponent},
      {path: 'assignusertoschool', component: GridPageComponent},
      {path: 'badge', component: BadgePageComponent},
      {path: 'icons', component: IconsPageComponent},
      {path: 'data-maps', component: DataMapsPageComponent},
      {path: 'translate', component: TranslatePageComponent},
      {path: 'scroll', component: ScrollPageComponent},
      {path: 'component-table', loadChildren: 'app/pages/component-table/component-table.module#ComponentTableModule'},
      {path: 'tree', loadChildren: 'app/pages/tree/tree-demo.module#TreeDemoModule'},
      {path: 'drag', loadChildren: 'app/pages/drag/drag.module#DragModule'},
      {path: 'editor', loadChildren: 'app/pages/editor/editor.module#EditorModule'},
      {path: 'slider', loadChildren: 'app/pages/slider/slider.module#SliderModule'},
      {path: '**', redirectTo: '/dashboard' },


     



    ]
  },
  { path: 'mainpage', redirectTo: '/main/dashboard', pathMatch: 'full' },
  
  {path: '', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'forgotpassword', component: ForgotpswdComponent},
  {path: 'changepassword', component: ChangepaswordComponent},
  {path: 'coming-soon', component: ComingSoonPageComponent},
  {path: 'maintenance', component: MaintenancePageComponent},
  {path: '404', component: NotFoundPageComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, {preloadingStrategy: PreloadAllModules}),
  ]
})
export class AppRoutesModule {
}
