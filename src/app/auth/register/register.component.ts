import { asNativeElements, Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  socialData: any = {
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    work:'',
    password:'',
    passwordConfirmation:''
  };
  formData: any = {};
  errors: any = [];
  notify!: string;

  constructor(private auth: AuthService, private router: Router, private socialauth:SocialAuthService) { }

  ngOnInit(): void { }

  register(): void {
    this.errors = [];
    this.auth.register(this.formData)
      .subscribe(() => {
        this.router.navigate(['/auth/login'], { queryParams: { registered: 'success' } });
       },
        (errorResponse) => {
          this.errors.push(errorResponse.error.error);
        });
  }
}