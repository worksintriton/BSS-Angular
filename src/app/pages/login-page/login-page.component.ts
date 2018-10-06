import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import Amplify from 'aws-amplify';
import Auth from '@aws-amplify/auth';
import { ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
    Amplify.configure({
      Auth: {
          identityPoolId: 'ap-south-1:93d2e200-af68-4de4-a29a-daced7c9977a', // Amazon Cognito Identity Pool ID us-east-1_XYZPQRS
          region: 'AP_SOUTH_1', // Amazon Cognito Region
           userPoolId: 'ap-south-1_4GMGfc70I',
   // OPTIONAL - Amazon Cognito User Pool ID
   userPoolWebClientId: '222mdbnu66v0sta5hk080mmsao',
   // OPTIONAL - Amazon Cognito Web Client ID
   oauth: {
     domain: 'my-app-development.auth.us-east-1.amazoncognito.com',
     // Authorized scopes
     scope: ['email', 'openid'],
     // Callback URL
     redirectSignIn: 'http://localhost:4200/authenticated',
     // Sign out URL
     redirectSignOut: 'http://localhost:4200/logout',
     // 'code' for Authorization code grant,
     // 'token' for Implicit grant
     responseType: 'code',
     // optional, for Cognito hosted ui specified options
     options: {
     // Indicates if the data collection is enabled to support Cognito advanced security features.
     // By default, this flag is set to true.
       AdvancedSecurityDataCollectionFlag: true
     }
      }
    }
    });
  }
  ngOnInit() {
  }
  trylogin(userid, password) {
  this.router.navigate(['mainpage']);
}
  trylogin1(userid, password) {

    if((userid!='')||(password!='')) {
      Auth.signIn(userid, password)
       .then(user => {
       //  this.userNote = user.challengeParam.userAttributes.email;
       this.router.navigate(['mainpage']);
        })
       .catch(err => {
        // this.userNote = "";
          console.log('this is error');
          console.log(err)
          alert(err.message);
        });

      } else {
        alert('Please Type username and password');
      }

  }
}
