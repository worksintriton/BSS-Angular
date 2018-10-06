import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-opertionteam-complaint',
  templateUrl: './opertionteam-complaint.component.html',
  styleUrls: ['./opertionteam-complaint.component.scss']
})
export class OpertionteamComplaintComponent implements OnInit {

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
      small: 'assets/images/ecommerce/product-1-img.png',
      medium: 'assets/images/ecommerce/product-1-img.png',
      big: 'assets/images/ecommerce/product-1-img.png'
    },
    {
      small: 'assets/images/ecommerce/product-2-img.png',
      medium: 'assets/images/ecommerce/product-2-img.png',
      big: 'assets/images/ecommerce/product-2-img.png'
    },
    {
      small: 'assets/images/ecommerce/product-4-img.png',
      medium: 'assets/images/ecommerce/product-4-img.png',
      big: 'assets/images/ecommerce/product-4-img.png'
    },
    {
      small: 'assets/images/ecommerce/product-5-img.png',
      medium: 'assets/images/ecommerce/product-5-img.png',
      big: 'assets/images/ecommerce/product-5-img.png'
    },
    {
      small: 'assets/images/ecommerce/product-6-img.png',
      medium: 'assets/images/ecommerce/product-6-img.png',
      big: 'assets/images/ecommerce/product-6-img.png'
    }, {
      small: 'assets/images/ecommerce/product-7-img.png',
      medium: 'assets/images/ecommerce/product-7-img.png',
      big: 'assets/images/ecommerce/product-7-img.png'
    },
    {
      small: 'assets/images/ecommerce/product-8-img.png',
      medium: 'assets/images/ecommerce/product-8-img.png',
      big: 'assets/images/ecommerce/product-8-img.png'
    }
  ];


  titles = [];
  datas: any;
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
    this.http.post('http://localhost/authentication/clientlist', this.model).subscribe(data => {
      this.datas = data;
      console.log(data);
    });
  }
  public view(event, item) {
    console.log(item.cliid);
    this.router.navigate(['main/clientdetails/' + item.cliid])
  }
  
  public edit(event, item) {
    console.log(item.cliid);
    this.router.navigate(['main/updateclient/' + item.cliid])
  }

  public open($event, item){
    console.log(item.cliid);
    this.http.post('https://bssservice.herokuapp.com/authentication/deleteclient',{cliid:item.cliid}).subscribe(data  => {
    console.log(data);
    alert("Deleted Successfully");
    this.ngOnInit();
    });



  }
}

class form1model {
  Email_id: "1";
}