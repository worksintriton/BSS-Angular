import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MultimenuComponent} from './components/multimenu/multimenu.component';
import {AppRoutesModule} from './routes/app-routes.module';
import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TypographyPageComponent} from './pages/typography-page/typography-page.component';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {NgbButtonsModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ResizeService} from './resize/resize.service';
import {EchartComponent} from './components/echart-component/echart.component';
import {DropdownPageComponent} from './pages/dropdown-page/dropdown-page.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {FormElementsPageComponent} from './pages/form-elements-page/form-elements-page.component';
import {ButtonsPageComponent} from './pages/buttons-page/buttons-page.component';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {RegisterPageComponent} from './pages/register-page/register-page.component';
import {ComingSoonPageComponent} from './pages/coming-soon-page/coming-soon-page.component';
import {MaintenancePageComponent} from './pages/maintenance-page/maintenance-page.component';
import {NotFoundPageComponent} from './pages/not-found-page/not-found-page.component';
import {ProductsPageComponent} from './pages/products-page/products-page.component';
import {OtherComponentsPageComponent} from './pages/other-components-page/other-components-page.component';
import {ProductDetailsPageComponent} from './pages/product-details-page/product-details-page.component';
import {TabsPageComponent} from './pages/tabs-page/tabs-page.component';
import {GalleryPageComponent} from './pages/gallery-page/gallery-page.component';
import {NgxGalleryModule} from 'ngx-gallery';
import {CartPageComponent} from './pages/cart-page/cart-page.component';
import {PricingTablesPageComponent} from './pages/pricing-tables-page/pricing-tables-page.component';
import {ListPageComponent} from './pages/list-page/list-page.component';
import {ProfilePageComponent} from './pages/profile-page/profile-page.component';
import {RatingPageComponent} from './pages/rating-page/rating-page.component';
import {AgmCoreModule} from '@agm/core';
import {GoogleMapPageComponent} from './pages/google-map-page/google-map-page.component';
import {ContactPageComponent} from './pages/contact-page/contact-page.component';
import {CardsPageComponent} from './pages/cards-page/cards-page.component';
import {TextMaskModule} from 'angular2-text-mask';
import { BarchartPageComponent } from './pages/barchart-page/barchart-page.component';
import { LineChartPageComponent } from './pages/line-chart-page/line-chart-page.component';
import { PieChartPageComponent } from './pages/pie-chart-page/pie-chart-page.component';
import { BubbleChartPageComponent } from './pages/bubble-chart-page/bubble-chart-page.component';
import { HeatMapPageComponent } from './pages/heat-map-page/heat-map-page.component';
import { RadarPageComponent } from './pages/radar-page/radar-page.component';
import { TablePageComponent } from './pages/table-page/table-page.component';
import { AccordionPageComponent } from './pages/accordion-page/accordion-page.component';
import { DatepickerPageComponent } from './pages/datepicker-page/datepicker-page.component';
import { ModalPageComponent } from './pages/modal-page/modal-page.component';
import { PaginationPageComponent } from './pages/pagination-page/pagination-page.component';
import { PopoverPageComponent } from './pages/popover-page/popover-page.component';
import { ProgressbarPageComponent } from './pages/progressbar-page/progressbar-page.component';
import { TimepickerPageComponent } from './pages/timepicker-page/timepicker-page.component';
import { TooltipPageComponent } from './pages/tooltip-page/tooltip-page.component';
import { GridPageComponent } from './pages/grid-page/grid-page.component';
import { BadgePageComponent } from './pages/badge-page/badge-page.component';
import { IconsPageComponent } from './pages/icons-page/icons-page.component';
import { DataMapsPageComponent } from './pages/data-maps-page/data-maps-page.component';
import { TranslatePageComponent } from './pages/translate-page/translate-page.component';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { ScrollPageComponent } from './pages/scroll-page/scroll-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SchoolmanagementComponent } from './Salesteam/schoolmanagement/schoolmanagement.component';
import { StorageServiceModule } from 'angular-webstorage-service';



import { ApiIntegService } from './api-integ.service';
import { HttpModule } from '@angular/http';




import { ForgotpswdComponent } from './pages/forgotpswd/forgotpswd.component';
import { ChangepaswordComponent } from './pages/changepasword/changepasword.component';





import { ViewuserComponent } from './Users/viewuser/viewuser.component';
import { ViewclientdetailComponent } from './Salesteam/viewclientdetail/viewclientdetail.component';
import { ViewemployeesComponent } from './Humanresource/viewemployees/viewemployees.component';
import { EmployeedetailsComponent } from './Humanresource/employeedetails/employeedetails.component';
import { EditemployeeComponent } from './Humanresource/editemployee/editemployee.component';

import { AddclientComponent } from './Salesteam/addclient/addclient.component';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { UpdateclientComponent } from './Salesteam/updateclient/updateclient.component';
import { UpdateemployeeComponent } from './Humanresource/updateemployee/updateemployee.component';
import { AddemployeeComponent } from './Humanresource/addemployee/addemployee.component';
import { AdduserComponent } from './Users/adduser/adduser.component';
import { UserdetailsComponent } from './Users/userdetails/userdetails.component';
import { HumanresoucesComponent } from './Humanresource/humanresouces/humanresouces.component';

import { HrreportComponent } from './Humanresource/hrreport/hrreport.component';

import { HrreportlistComponent } from './Humanresource/hrreportlist/hrreportlist.component';
import { HrnewreportComponent } from './Humanresource/hrnewreport/hrnewreport.component';
import { HreditreportComponent } from './Humanresource/hreditreport/hreditreport.component';
import { HrviewclientComponent } from './Humanresource/hrviewclient/hrviewclient.component';
import { HrreportslipComponent } from './Humanresource/hrreportslip/hrreportslip.component';
import { HrassassignemployeeComponent } from './Humanresource/hrassassignemployee/hrassassignemployee.component';
import { HrassignemployeelistComponent } from './Humanresource/hrassignemployeelist/hrassignemployeelist.component';
import { HreditassignemployeeComponent } from './Humanresource/hreditassignemployee/hreditassignemployee.component';
import { HrviewassignemployeeComponent } from './Humanresource/hrviewassignemployee/hrviewassignemployee.component';
import { SalesnewcontractComponent } from './Salesteam/salesnewcontract/salesnewcontract.component';
import { SalescontractlistComponent } from './Salesteam/salescontractlist/salescontractlist.component';
import { SaleseditcontractComponent } from './Salesteam/saleseditcontract/saleseditcontract.component';
import { SalesbillingComponent } from './Salesteam/salesbilling/salesbilling.component';
import { SalespipelineComponent } from './Salesteam/salespipeline/salespipeline.component';
import { SalesnotificationComponent } from './Salesteam/salesnotification/salesnotification.component';

import { SalesviewnoticeComponent } from './Salesteam/salesviewnotice/salesviewnotice.component';
import { SalesclienthistoryComponent } from './Salesteam/salesclienthistory/salesclienthistory.component';


import { Updateclient1Component } from './Salesteam/updateclient1/updateclient1.component';

import { OperationcomplaintlistComponent } from './operationteam/operationcomplaintlist/operationcomplaintlist.component';
import { OperationfeedbacklistComponent } from './operationteam/operationfeedbacklist/operationfeedbacklist.component';
import { OperacominprogresslistComponent } from './operationteam/operacominprogresslist/operacominprogresslist.component';

import { OperacomcompletelistComponent } from './operationteam/operacomcompletelist/operacomcompletelist.component';
import { OperacomcompleteviewComponent } from './operationteam/operacomcompleteview/operacomcompleteview.component';
import { OperationfeedbackinprogressComponent } from './operationteam/operationfeedbackinprogress/operationfeedbackinprogress.component';
import { OperationfeedbackcompletedlistComponent } from './operationteam/operationfeedbackcompletedlist/operationfeedbackcompletedlist.component';
import { OperationfeedbackcompletedviewComponent } from './operationteam/operationfeedbackcompletedview/operationfeedbackcompletedview.component';
import { EmployeeComponent } from './searchquery/employee/employee.component';
import { ClientComponent } from './searchquery/client/client.component';
import { CreateinvoiceComponent } from './FinanceManagement/createinvoice/createinvoice.component';
import { UpdateinvoiceComponent } from './FinanceManagement/updateinvoice/updateinvoice.component';
import { InvoicelistComponent } from './FinanceManagement/invoicelist/invoicelist.component';
import { InvoiceviewComponent } from './FinanceManagement/invoiceview/invoiceview.component';
import { InvoicebillingComponent } from './FinanceManagement/invoicebilling/invoicebilling.component';
import { SalarypaymentComponent } from './FinanceManagement/salarypayment/salarypayment.component';
import { AddsalarypaymentComponent } from './FinanceManagement/addsalarypayment/addsalarypayment.component';
import { OperationcomlistComponent } from './operationteam/operationcomlist/operationcomlist.component';
import { OperationfeedlistComponent } from './operationteam/operationfeedlist/operationfeedlist.component';
import { FinanceyearComponent } from './FinanceManagement/financeyear/financeyear.component';
import { FinancemonthComponent } from './FinanceManagement/financemonth/financemonth.component';
import { FinancedateComponent } from './FinanceManagement/financedate/financedate.component';
import { FinancesinglebillComponent } from './FinanceManagement/financesinglebill/financesinglebill.component';
import { AttendancemanagementComponent } from './Humanresource/attendancemanagement/attendancemanagement.component';
import { SalaryyearlyComponent } from './FinanceManagement/salaryyearly/salaryyearly.component';
import { SalarymonthlyComponent } from './FinanceManagement/salarymonthly/salarymonthly.component';
import { SalarydateComponent } from './FinanceManagement/salarydate/salarydate.component';
import { SalarylistComponent } from './FinanceManagement/salarylist/salarylist.component';
import { ViewdetailsComponent } from './Users/viewdetails/viewdetails.component';
import { ConfigurenumberComponent } from './operationteam/configurenumber/configurenumber.component';
import { SettrainingComponent } from './operationteam/settraining/settraining.component';
import { SettraininglistComponent } from './operationteam/settraininglist/settraininglist.component';
import { SettrainingvideosComponent } from './operationteam/settrainingvideos/settrainingvideos.component';
import { SettraininglessonsComponent } from './operationteam/settraininglessons/settraininglessons.component';
import { EmployeetrackingComponent } from './employeetracking/employeetracking.component';
import{ FAQComponent } from './operationteam/faq/faq.component';
import { ExamlistComponent } from './operationteam/examlist/examlist.component';
import { QuestionpaperComponent } from './operationteam/questionpaper/questionpaper.component';
import { PointtrackComponent }from './operationteam/pointtracking/pointtrack/pointtrack.component';
import { PointtrackdetailsComponent } from './operationteam/pointtracking/pointtrackdetails/pointtrackdetails.component'









const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

// AoT requires an exported function for factories for translate module
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MultimenuComponent,
    DashboardPageComponent,
    TypographyPageComponent,
    EchartComponent,
    DropdownPageComponent,
    LoginPageComponent,
    FormElementsPageComponent,
    ButtonsPageComponent,
    MainPageComponent,
    RegisterPageComponent,
    ComingSoonPageComponent,
    MaintenancePageComponent,
    NotFoundPageComponent,
    ProductsPageComponent,
    OtherComponentsPageComponent,
    ProductDetailsPageComponent,
    TabsPageComponent,
    GalleryPageComponent,
    CartPageComponent,
    PricingTablesPageComponent,
    ListPageComponent,
    ProfilePageComponent,
    RatingPageComponent,
    GoogleMapPageComponent,
    ContactPageComponent,
    CardsPageComponent,
    BarchartPageComponent,
    LineChartPageComponent,
    PieChartPageComponent,
    BubbleChartPageComponent,
    HeatMapPageComponent,
    RadarPageComponent,
    TablePageComponent,
    AccordionPageComponent,
    DatepickerPageComponent,
    ModalPageComponent,
    PaginationPageComponent,
    PopoverPageComponent,
    ProgressbarPageComponent,
    TimepickerPageComponent,
    TooltipPageComponent,
    GridPageComponent,
    BadgePageComponent,
    IconsPageComponent,
    DataMapsPageComponent,
    TranslatePageComponent,
    ScrollPageComponent,
    SchoolmanagementComponent,
    FAQComponent,
    PointtrackComponent,
    
  

 
    ForgotpswdComponent,
    ChangepaswordComponent,

   
    ViewuserComponent,
    ViewclientdetailComponent,
    ViewemployeesComponent,
    EmployeedetailsComponent,
    EditemployeeComponent,
    AddclientComponent,
    UpdateclientComponent,
    UpdateemployeeComponent,
    AddemployeeComponent,
    AdduserComponent,
    UserdetailsComponent,
    HumanresoucesComponent,
    HrreportComponent,
    HrreportlistComponent,
    HrnewreportComponent,
    HreditreportComponent,
    HrviewclientComponent,
    HrreportslipComponent,
    HrassassignemployeeComponent,
    HrassignemployeelistComponent,
    HreditassignemployeeComponent,
    HrviewassignemployeeComponent,
    SalesnewcontractComponent,
    SalescontractlistComponent,
    SaleseditcontractComponent,
    SalesbillingComponent,
    SalespipelineComponent,
    SalesnotificationComponent,
    SalesviewnoticeComponent,
    SalesclienthistoryComponent,
    Updateclient1Component,
    OperationcomplaintlistComponent,
    OperationfeedbacklistComponent,
    OperacominprogresslistComponent,
    OperacomcompletelistComponent,
    OperacomcompleteviewComponent,
    OperationfeedbackinprogressComponent,
    OperationfeedbackcompletedlistComponent,
    OperationfeedbackcompletedviewComponent,
    EmployeeComponent,
    ClientComponent,
    CreateinvoiceComponent,
    UpdateinvoiceComponent,
    InvoicelistComponent,
    InvoiceviewComponent,
    InvoicebillingComponent,
    SalarypaymentComponent,
    AddsalarypaymentComponent,
    OperationcomlistComponent,
    OperationfeedlistComponent,
    FinanceyearComponent,
    FinancemonthComponent,
    FinancedateComponent,
    FinancesinglebillComponent,
    AttendancemanagementComponent,
    SalaryyearlyComponent,
    SalarymonthlyComponent,
    SalarydateComponent,
    SalarylistComponent,
    ViewdetailsComponent,
    ConfigurenumberComponent,
    SettrainingComponent,
    SettraininglistComponent,
    SettrainingvideosComponent,
    SettraininglessonsComponent,
    EmployeetrackingComponent,
    ExamlistComponent,
    QuestionpaperComponent,
    PointtrackdetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    RouterModule,
    AppRoutesModule,
    NgbModule.forRoot(),
    NgbButtonsModule,
    NgxGalleryModule,
    TextMaskModule,
    BrowserAnimationsModule,
    HttpModule,StorageServiceModule,


    // Insert your google maps api key, if you do not need google map in your project, you can remove this import
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAMEDuXnjto8fuz82XPZFLVN3sPfkMjRrg'
    }),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
  
    ApiIntegService,
    ResizeService,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
