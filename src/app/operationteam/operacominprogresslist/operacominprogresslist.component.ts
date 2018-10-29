import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';



@Component({
  selector: 'app-operacominprogresslist',
  templateUrl: './operacominprogresslist.component.html',
  styleUrls: ['./operacominprogresslist.component.scss']
})
export class OperacominprogresslistComponent implements OnInit {

  onlyThumbnailsGalleryOptions = [
    {
      'image': false,
      'height': '100px',
      'thumbnailSize': 'contain',
      'arrowPrevIcon': 'fa fa-angle-left',
      'arrowNextIcon': 'fa fa-angle-right',
      'width': '100%'
    }
  ];

  galleryImages = [
    {
      small: 'assets/images/ecommerce/how-to-handle-guest-with-complaints-in-hotel-1-638.jpg',
      medium: 'assets/images/ecommerce/how-to-handle-guest-with-complaints-in-hotel-1-638.jpg',
      big: 'assets/images/ecommerce/how-to-handle-guest-with-complaints-in-hotel-1-638.jpg'
    },
    {
      small: 'assets/images/ecommerce/images.jpeg',
      medium: 'assets/images/ecommerce/images.jpeg',
      big: 'assets/images/ecommerce/images.jpeg'
    },
    {
      small: 'assets/images/ecommerce/original_6_Hotel_Pet_Peeves_And_How_Hotels_Should_Solve_Them.jpg',
      medium: 'assets/images/ecommerce/original_6_Hotel_Pet_Peeves_And_How_Hotels_Should_Solve_Them.jpg',
      big: 'assets/images/ecommerce/original_6_Hotel_Pet_Peeves_And_How_Hotels_Should_Solve_Them.jpg'
    }
  ];
  
title:string;
description:string;
status:string;
complaint_ids:string;
updated_at:string;
taken_by:string;


  titles = [];
  datas = [];
  datass:any;
  complaint_id:number;
  data:any;
  cliid:string;
  model: form1model;

  urls = new Array<string>();
  detectFiles(event) {
    this.urls = [];
    let files = event.target.files;
    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.urls.push(e.target.result);
        }
        reader.readAsDataURL(file);
      }
    }
  }
  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) { 
    this.model = new form1model();
  }

  ngOnInit() {
    this.http.post('https://bssservice.herokuapp.com/issue/listmyissues',{"LoginKey":"vishnu.m@tritonadc.in"}).subscribe(data => {
      this.datas=[];
      let dat = <Issuelist>data;
      for (let index = 0; index < dat.issue.length; index++) {
        const element = dat.issue[index];
        if(element.status === 'Inprogress')
          this.datas.push(element);
      }
      console.log(this.datas);
    });
  }


  public assign1(event, item) {
    console.log(item.complaint_id);
    this.http.post('https://bssservice.herokuapp.com/issue/issuedetails',{complaint_id:item.complaint_id}).subscribe((data:any)  => {
    console.log(data);
    this.datass = data;
    });
  }

  public assign3(event, item) {
    console.log(item.complaint_id);
    this.http.post('https://bssservice.herokuapp.com/issue/issuedetails',{complaint_id:item.complaint_id}).subscribe((data:any)  => {
    console.log(data);
    this.datass = data;
    });
  }

  public assign2(complaint_ids,title,description,take_by) {
    this.taken_by = take_by;
    this.complaint_ids = complaint_ids;
    this.title = title;
    this.description = description;
    this.status = "completed";
    this.updated_at = "2018-10-25T07:54:08.600+05:31";
    this.http.post('https://bssservice.herokuapp.com/issue/report',{"complaint_id":this.complaint_ids,"title":this.title,"description":this.description,"taken_by":this.taken_by,"updated_at":this.updated_at,"status":this.status}).subscribe((data:any)  => {
      console.log(data);
      alert(data.message);
      this.ngOnInit();
      });
      this.ngOnInit();
  }


  public assign(taken_by,complaint_id) {
    this.taken_by = taken_by;
    this.complaint_id = complaint_id;
    this.updated_at = "2018-10-25T07:54:08.600+05:31";
    this.http.post('https://bssservice.herokuapp.com/issue/taken_by',{"complaint_id":complaint_id,"taken_by":taken_by,"updated_at":this.updated_at}).subscribe((data:any)  => {
      console.log(data);
      alert(data.message);
      });
      this.ngOnInit();
  }




  public open($event, item){
    console.log(item.complaint_id);
    this.http.post('https://bssservice.herokuapp.com/issue/issuedetails',{complaint_id:item.complaint_id}).subscribe((data:any)  => {
    console.log(data);
    this.datass = data;
    console.log(this.datass.issue.complaint_from); 
    });
  }

  
  addapi1(){
    this.router.navigate(['main/Operationcomplaintlist'])
  }
  addapi2(){
    this.router.navigate(['main/operacominprogresslist'])
  }
  addapi3(){
    this.router.navigate(['main/operacomcompletelist'])
  }
  addapi4(){
    this.router.navigate(['main/Operationcomlist'])
  }
}

class form1model {
  Email_id: "1";
}

class Issue {
  complaint_from: string;
  poster_id: string;
  complaint_type: string;
  title: string;
  description: string;
  status: string;
  posted_on: string;
  created_at: Date;
  updated_at: Date;
  moved_by: string;
  moved_to: string;
  taken_by: string;
  complaint_id: number;
}

class Issuelist {
  issue: Issue[];
  attachments: any[];
  message: string;
  status: string;
  code: number;
}