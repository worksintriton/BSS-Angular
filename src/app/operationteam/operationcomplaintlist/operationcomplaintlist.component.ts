import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-operationcomplaintlist',
  templateUrl: './operationcomplaintlist.component.html',
  styleUrls: ['./operationcomplaintlist.component.scss']
})
export class OperationcomplaintlistComponent implements OnInit {

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

  titles = [];
  datas = [];
  complaint_id:number;
  datass:any;
  data:any;
  cliid:string;
  model: form1model;

  your_id:string;
  moved_to:string;
  updated_at:string;
  status:string;

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
        if(element.status === 'open')
          this.datas.push(element);
      }
      console.log(this.datas);
    });
  }
  public view(event, item) {
    console.log(item.cliid);
    this.router.navigate(['main/clientdetails/' + item.cliid])
  }


 public submit(complaint_id,your_id,moved_to){
   this.complaint_id = complaint_id;
   this.your_id = your_id;
   this.moved_to = moved_to;
   this.updated_at = "2018-10-25T07:54:08.600+05:30";
   this.status = "Inprogress";
    this.http.post('https://bssservice.herokuapp.com/issue/updateissues',{"complaint_id":this.complaint_id,"moved_by":this.your_id,"moved_to":this.moved_to,"updated_at":this.updated_at,"status":this.status}).subscribe((data:any)  => {
      console.log(data);
      alert(data.message);
      });
      this.ngOnInit();
  }


  
  public Move(event, item) {
    console.log(item.complaint_id);
    this.http.post('https://bssservice.herokuapp.com/issue/issuedetails',{complaint_id:item.complaint_id}).subscribe((data:any)  => {
    console.log(data);
    this.datass = data;
    });
  }

  public open($event, item){
    console.log(item.complaint_id);
    this.http.post('https://bssservice.herokuapp.com/issue/issuedetails',{complaint_id:item.complaint_id}).subscribe((data:any)  => {
    console.log(data);
    this.datass = data;
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