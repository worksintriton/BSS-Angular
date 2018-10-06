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
import { SchoolmanagementComponent } from './schoolmanagement/schoolmanagement.component';


import { AssignusertoschoolComponent } from './assignusertoschool/assignusertoschool.component';

import { ApiIntegService } from './api-integ.service';
import { HttpModule } from '@angular/http';
import {SchoolsService} from './schools.service';
import { UpdateschoolComponent } from './updateschool/updateschool.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { ViewschooluserComponent } from './viewschooluser/viewschooluser.component';
import { ForgotpswdComponent } from './pages/forgotpswd/forgotpswd.component';
import { ChangepaswordComponent } from './pages/changepasword/changepasword.component';
import { AssingComponent } from './assing/assing.component';
import { ViewassignComponent } from './viewassign/viewassign.component';

import { IssuesComponent } from './issues/issues.component';
import { ClientissuesComponent } from './clientissues/clientissues.component';

import { UpdateissuesComponent } from './updateissues/updateissues.component';
import { UpdateclientissuesComponent } from './updateclientissues/updateclientissues.component';


import { ViewuserComponent } from './viewuser/viewuser.component';
import { ViewclientdetailComponent } from './viewclientdetail/viewclientdetail.component';
import { EditclientComponent } from './editclient/editclient.component';
import { ViewemployeesComponent } from './viewemployees/viewemployees.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { EditusersComponent } from './editusers/editusers.component';
import { AddclientComponent } from './addclient/addclient.component';
import { TestpageComponent } from './testpage/testpage.component';
import { Test1Component } from './test1/test1.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { UpdateclientComponent } from './updateclient/updateclient.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { HumanresoucesComponent } from './humanresouces/humanresouces.component';

import { HrreportComponent } from './hrreport/hrreport.component';
import { ViewassignemployeeComponent } from './viewassignemployee/viewassignemployee.component';
import { HrreportlistComponent } from './hrreportlist/hrreportlist.component';
import { HrnewreportComponent } from './hrnewreport/hrnewreport.component';
import { HreditreportComponent } from './hreditreport/hreditreport.component';
import { HrviewclientComponent } from './hrviewclient/hrviewclient.component';
import { HrreportslipComponent } from './hrreportslip/hrreportslip.component';
import { HrassassignemployeeComponent } from './hrassassignemployee/hrassassignemployee.component';
import { HrassignemployeelistComponent } from './hrassignemployeelist/hrassignemployeelist.component';
import { HreditassignemployeeComponent } from './hreditassignemployee/hreditassignemployee.component';
import { HrviewassignemployeeComponent } from './hrviewassignemployee/hrviewassignemployee.component';
import { SalesnewcontractComponent } from './salesnewcontract/salesnewcontract.component';
import { SalescontractlistComponent } from './salescontractlist/salescontractlist.component';
import { SaleseditcontractComponent } from './saleseditcontract/saleseditcontract.component';
import { SalesbillingComponent } from './salesbilling/salesbilling.component';
import { SalespipelineComponent } from './salespipeline/salespipeline.component';
import { SalesnotificationComponent } from './salesnotification/salesnotification.component';

import { SalesviewnoticeComponent } from './salesviewnotice/salesviewnotice.component';
import { SalesclienthistoryComponent } from './salesclienthistory/salesclienthistory.component';
import { ClienthistoryviewComponent } from './clienthistoryview/clienthistoryview.component';

import { Addemployeepg1Component } from './addemployeepg1/addemployeepg1.component';
import { Addemployeepg2Component } from './addemployeepg2/addemployeepg2.component';

import { Addemployeepg3Component } from './addemployeepg3/addemployeepg3.component';
import { Updateemployee1Component } from './updateemployee1/updateemployee1.component';
import { Updateclient1Component } from './updateclient1/updateclient1.component';
import { OpertionteamComplaintComponent } from './opertionteam-complaint/opertionteam-complaint.component';
import { OpertionteamComplaintviewComponent } from './opertionteam-complaintview/opertionteam-complaintview.component';
import { OpertionteamfeedbackComponent } from './opertionteamfeedback/opertionteamfeedback.component';
import { OpertionteamfeedbackviewComponent } from './opertionteamfeedbackview/opertionteamfeedbackview.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';










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
    AssignusertoschoolComponent,
    UpdateschoolComponent,
    UpdateuserComponent,
    ViewschooluserComponent,
    ForgotpswdComponent,
    ChangepaswordComponent,
    AssingComponent,
    ViewassignComponent,
    IssuesComponent,
    ClientissuesComponent,
    UpdateissuesComponent,
    UpdateclientissuesComponent,
    ViewuserComponent,
    ViewclientdetailComponent,
    EditclientComponent,
    ViewemployeesComponent,
    EmployeedetailsComponent,
    EditemployeeComponent,
    ViewusersComponent,
    EditusersComponent,
    AddclientComponent,
    TestpageComponent,
    Test1Component,
    UpdateclientComponent,
    UpdateemployeeComponent,
    AddemployeeComponent,
    AdduserComponent,
    UserdetailsComponent,
    HumanresoucesComponent,
    HrreportComponent,
    ViewassignemployeeComponent,
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
    ClienthistoryviewComponent,
    Addemployeepg1Component,
    Addemployeepg2Component,
    Addemployeepg3Component,
    Updateemployee1Component,
    Updateclient1Component,
    OpertionteamComplaintComponent,
    OpertionteamComplaintviewComponent,
    OpertionteamfeedbackComponent,
    OpertionteamfeedbackviewComponent,
    AdmindashboardComponent
   
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
    HttpModule,


    // Insert your google maps api key, if you do not need google map in your project, you can remove this import
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_KEY_HERE'
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
    SchoolsService,
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
