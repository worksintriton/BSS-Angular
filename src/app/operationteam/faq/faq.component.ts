import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FAQComponent implements OnInit {

  titles = [];
  datas: any;
  datass:any = {};
  faq_id:string;
  
  
  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) {

    this.datass.questions="";
    this.datass.answers="";

  }
  ngOnInit(){
    this.http.post('https://bssservice.herokuapp.com/authentication/Questionlist',{"Employee_id":"1"}).subscribe((data:any) => {
      this.datas = data.data;
      console.log(this.datas);
    });   
    }

    public view(event, item) {
      this.faq_id  = item.faq_id
      console.log(this.faq_id);
      this.http.post('https://bssservice.herokuapp.com/authentication/Question_id',{"faq_id":this.faq_id}).subscribe((data:any) => {
        this.datass = data.data;
        console.log(this.datass.questions);
      });  
    }

    public update(questions,answers) {
      console.log(this.faq_id);
      this.http.post('https://bssservice.herokuapp.com/authentication/updatequestions',{"questions":questions,"answers":answers,"faq_id":this.faq_id}).subscribe((data:any) => {
        this.datass = data.data;
        console.log(this.datass.questions);
        alert("Updated Successfully");
         this.ngOnInit();
      });  
     
    }

    public edit($event, item){
      this.faq_id  = item.faq_id
      console.log(this.faq_id);
      this.http.post('https://bssservice.herokuapp.com/authentication/Question_id',{"faq_id":this.faq_id}).subscribe((data:any) => {
        this.datass = data.data;
        console.log(this.datass.questions);
      });  
    }


    public delete($event, item){
      this.faq_id  = item.faq_id
      console.log(this.faq_id);
      this.http.post('https://bssservice.herokuapp.com/authentication/deletequestions',{"faq_id":this.faq_id}).subscribe((data:any) => {
        this.datass = data.data;
        console.log(this.datass.questions);
        alert("Deleted Successfully");
        this.ngOnInit();
      });  
     
    }


    public assign(questionss,answerss) {
      this.http.post('https://bssservice.herokuapp.com/authentication/addquestions',{"questions":questionss,"answers":answerss}).subscribe((data:any)  => {
        console.log(data);
        alert("asdf");
        this.ngOnInit()
        });
     
    }
}