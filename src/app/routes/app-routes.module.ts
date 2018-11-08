

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
import { SchoolmanagementComponent } from '../Salesteam/schoolmanagement/schoolmanagement.component';




import { ForgotpswdComponent } from '../pages/forgotpswd/forgotpswd.component';
import { ChangepaswordComponent } from '../pages/changepasword/changepasword.component';



import { ViewuserComponent } from '../Users/viewuser/viewuser.component';

import { ViewclientdetailComponent } from '../Salesteam/viewclientdetail/viewclientdetail.component';

import { ViewemployeesComponent } from '../Humanresource/viewemployees/viewemployees.component';
import { EmployeedetailsComponent } from '../Humanresource/employeedetails/employeedetails.component';
import { EditemployeeComponent } from '../Humanresource/editemployee/editemployee.component';

import { AddclientComponent } from '../Salesteam/addclient/addclient.component';

import { UpdateclientComponent } from '../Salesteam/updateclient/updateclient.component';
import { UpdateemployeeComponent } from '../Humanresource/updateemployee/updateemployee.component';
import { AddemployeeComponent } from '../Humanresource/addemployee/addemployee.component';
import { AdduserComponent } from '../Users/adduser/adduser.component';
import { UserdetailsComponent } from '../Users/userdetails/userdetails.component';
import { HumanresoucesComponent } from '../Humanresource/humanresouces/humanresouces.component';
import { HrreportlistComponent } from '../Humanresource/hrreportlist/hrreportlist.component';
import { HrnewreportComponent } from '../Humanresource/hrnewreport/hrnewreport.component';
import { HreditreportComponent } from '../Humanresource/hreditreport/hreditreport.component';
import { HrviewclientComponent } from '../Humanresource/hrviewclient/hrviewclient.component';
import { HrreportslipComponent } from '../Humanresource/hrreportslip/hrreportslip.component';
import { HrreportComponent } from '../Humanresource/hrreport/hrreport.component';
import { HrassassignemployeeComponent } from '../Humanresource/hrassassignemployee/hrassassignemployee.component';
import { HrassignemployeelistComponent } from '../Humanresource/hrassignemployeelist/hrassignemployeelist.component';
import { HreditassignemployeeComponent } from '../Humanresource/hreditassignemployee/hreditassignemployee.component';
import { HrviewassignemployeeComponent } from '../Humanresource/hrviewassignemployee/hrviewassignemployee.component';
import { SalesnewcontractComponent } from '../Salesteam/salesnewcontract/salesnewcontract.component';
import { SalescontractlistComponent } from '../Salesteam/salescontractlist/salescontractlist.component';
import { SaleseditcontractComponent } from '../Salesteam/saleseditcontract/saleseditcontract.component';
import { SalesbillingComponent } from '../Salesteam/salesbilling/salesbilling.component';
import { SalespipelineComponent } from '../Salesteam/salespipeline/salespipeline.component';
import { SalesnotificationComponent } from '../Salesteam/salesnotification/salesnotification.component';

import { SalesviewnoticeComponent } from '../Salesteam/salesviewnotice/salesviewnotice.component';
import { SalesclienthistoryComponent } from '../Salesteam/salesclienthistory/salesclienthistory.component';

import { Updateclient1Component } from '../Salesteam/updateclient1/updateclient1.component';

import { OperationcomplaintlistComponent } from '../operationteam/operationcomplaintlist/operationcomplaintlist.component';
import { OperationfeedbacklistComponent } from '../operationteam/operationfeedbacklist/operationfeedbacklist.component';
import { OperacomcompleteviewComponent } from '../operationteam/operacomcompleteview/operacomcompleteview.component';
import { OperacominprogresslistComponent } from '../operationteam/operacominprogresslist/operacominprogresslist.component';
import { OperacomcompletelistComponent } from '../operationteam/operacomcompletelist/operacomcompletelist.component';
import { OperationfeedbackinprogressComponent } from '../operationteam/operationfeedbackinprogress/operationfeedbackinprogress.component';
import { OperationfeedbackcompletedlistComponent } from '../operationteam/operationfeedbackcompletedlist/operationfeedbackcompletedlist.component';
import { OperationfeedbackcompletedviewComponent } from '../operationteam/operationfeedbackcompletedview/operationfeedbackcompletedview.component';
import { EmployeeComponent } from '../searchquery/employee/employee.component';
import { ClientComponent } from '../searchquery/client/client.component';
import { CreateinvoiceComponent } from '../FinanceManagement/createinvoice/createinvoice.component';
import { UpdateinvoiceComponent } from '../FinanceManagement/updateinvoice/updateinvoice.component';
import { InvoicelistComponent } from '../FinanceManagement/invoicelist/invoicelist.component';
import { InvoiceviewComponent } from '../FinanceManagement/invoiceview/invoiceview.component';
import { InvoicebillingComponent } from '../FinanceManagement/invoicebilling/invoicebilling.component';
import { SalarypaymentComponent } from '../FinanceManagement/salarypayment/salarypayment.component';
import { AddsalarypaymentComponent } from '../FinanceManagement/addsalarypayment/addsalarypayment.component';
import { OperationcomlistComponent } from '../operationteam/operationcomlist/operationcomlist.component';
import { OperationfeedlistComponent } from '../operationteam/operationfeedlist/operationfeedlist.component';
import { FinanceyearComponent } from '../FinanceManagement/financeyear/financeyear.component';
import { FinancemonthComponent } from '../FinanceManagement/financemonth/financemonth.component';
import { FinancedateComponent } from '../FinanceManagement/financedate/financedate.component';
import { FinancesinglebillComponent } from '../FinanceManagement/financesinglebill/financesinglebill.component';
import { AttendancemanagementComponent } from '../Humanresource/attendancemanagement/attendancemanagement.component';
import { SalaryyearlyComponent } from '../FinanceManagement/salaryyearly/salaryyearly.component';
import { SalarymonthlyComponent } from '../FinanceManagement/salarymonthly/salarymonthly.component';
import { SalarydateComponent } from '../FinanceManagement/salarydate/salarydate.component';
import { SalarylistComponent } from '../FinanceManagement/salarylist/salarylist.component';
import { ViewdetailsComponent } from 'app/Users/viewdetails/viewdetails.component';
import { ConfigurenumberComponent } from 'app/operationteam/configurenumber/configurenumber.component';
import { SettrainingComponent } from 'app/operationteam/settraining/settraining.component';
import { SettrainingvideosComponent } from 'app/operationteam/settrainingvideos/settrainingvideos.component';
import { SettraininglistComponent } from 'app/operationteam/settraininglist/settraininglist.component';
import { SettraininglessonsComponent } from 'app/operationteam/settraininglessons/settraininglessons.component';
import { EmployeetrackingComponent } from 'app/employeetracking/employeetracking.component';
import { FAQComponent } from 'app/operationteam/faq/faq.component';
import { ExamlistComponent } from 'app/operationteam/examlist/examlist.component';
import { QuestionpaperComponent } from 'app/operationteam/questionpaper/questionpaper.component';
import { PointtrackComponent } from 'app/operationteam/pointtracking/pointtrack/pointtrack.component';
import { PointtrackdetailsComponent  } from 'app/operationteam/pointtracking/pointtrackdetails/pointtrackdetails.component'
import { MapsComponent } from 'app/maps/maps.component';









// Routes model for application. Some of the pages are loaded lazily to increase startup time.
const APP_ROUTES: Routes = [
  {
    path: 'main', component: MainPageComponent, children: [
      {path: 'dashboard', component: DashboardPageComponent},
 
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
     {path: 'hrattendance', component: AttendancemanagementComponent},




     {path: 'salesnewcontract/:id', component: SalesnewcontractComponent},   
     {path: 'salescontractlist', component: SalescontractlistComponent},
     {path: 'saleseditcontract', component: SaleseditcontractComponent},
     {path: 'salesbilling/:id', component: SalesbillingComponent},
     {path: 'salespipeline', component: SalespipelineComponent}, 
     {path: 'salesnotification', component: SalesnotificationComponent},
     {path: 'salesviewnotice', component: SalesviewnoticeComponent},
     {path: 'salesclienthistory', component: SalesclienthistoryComponent},

   


    
      
    
    
      
     
      {path: 'clientmanagement', component: SchoolmanagementComponent},
   
      
      {path: 'addclient', component: AddclientComponent},

      {path: 'addemployee', component: AddemployeeComponent},
      {path: 'schoolmanagement', component: TypographyPageComponent},
      {path: 'dropdown', component: DropdownPageComponent},
      {path: '', component: LoginPageComponent},
      {path: 'viewuser', component: ViewuserComponent},
      {path: 'addusers', component: AdduserComponent},
      {path: 'form-elements', component: FormElementsPageComponent},
   
   

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
      
      {path: 'Configurenumber', component: ConfigurenumberComponent},
      
      {path: 'clientdetails/:id', component: ViewclientdetailComponent},
      {path: 'updateclient/:id', component: UpdateclientComponent},
      {path: 'updateclient1/:id', component: Updateclient1Component},
      
      {path: 'employeedetails/:id', component: EmployeedetailsComponent},
      {path: 'updateemployee/:id', component: UpdateemployeeComponent},


      {path: 'userdetails/:id', component: UserdetailsComponent},
      {path: 'viewdetails/:id', component: ViewdetailsComponent},
    

      {path: 'Operationcomlist', component: OperationcomlistComponent},
      {path: 'Operationcomplaintlist', component: OperationcomplaintlistComponent},
      {path: 'operacominprogresslist', component: OperacominprogresslistComponent},
      {path: 'operacomcompletelist', component: OperacomcompletelistComponent},
      {path: 'operacomcompleteview/:id', component: OperacomcompleteviewComponent},


      {path: 'settrainingtop', component: SettrainingComponent},
      {path: 'settrainingvideos/:id', component: SettrainingvideosComponent },
      {path: 'settraininglist', component: SettraininglistComponent},
      {path: 'settraininglessons/:id', component: SettraininglessonsComponent},



      {path: 'employeetracking', component: EmployeetrackingComponent},


      {path: 'FAQ', component: FAQComponent},

      {path: 'Examlist', component: ExamlistComponent},


      {path: 'maps', component: MapsComponent},


      {path: 'questionpaper', component: QuestionpaperComponent},

      
      // point Tacrking Process//


      {path: 'Pointtracking', component: PointtrackComponent},
      {path: 'Pointtrackingdetails/:id', component: PointtrackdetailsComponent},











      {path: 'operationfeedlist', component: OperationfeedlistComponent},
      {path: 'Operationfeedbacklist', component: OperationfeedbacklistComponent},
      {path: 'Operationfeedbackinprogress', component: OperationfeedbackinprogressComponent},
      {path: 'Operationfeedbackcompletedlist', component: OperationfeedbackcompletedlistComponent},
      {path: 'Operationfeedbackcompletedview', component: OperationfeedbackcompletedviewComponent},
   

      {path: 'employeesearch', component: EmployeeComponent},
      {path: 'clientsearch', component: ClientComponent},

      {path: 'Financecreateinvoice', component: CreateinvoiceComponent},
      {path: 'Financeupdateinvoice', component: UpdateinvoiceComponent},
      {path: 'Financeinvoicelist', component: InvoicelistComponent},
      {path: 'Financeinvoiceview', component: InvoiceviewComponent},
      {path: 'Financeinvoicebilling', component: InvoicebillingComponent},
      {path: 'FinanceyearComponent', component: FinanceyearComponent},
      {path: 'FinancemonthComponent', component: FinancemonthComponent},
      {path: 'FinancedateComponent', component: FinancedateComponent},
      {path: 'Financesinglebill', component: FinancesinglebillComponent},

   

      {path: 'Financesalarypayment', component: SalarypaymentComponent},
 
      {path: 'Financesalyear', component: SalaryyearlyComponent},
      {path: 'Financesalmonth', component: SalarymonthlyComponent},
      {path: 'Finanacesaledate', component: SalarydateComponent},
      {path: 'Finanacesalelist', component: SalarylistComponent},
      {path: 'Finanacesalepayment', component: SalarypaymentComponent},









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
