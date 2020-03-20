import { Component, OnInit } from '@angular/core';  
import { Router } from '@angular/router';  
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { IsloginService } from '../services/islogin.service'  

@Component({  
   selector: 'app-login',  
   templateUrl: './login.component.html',  
   styleUrls: ['./login.component.scss']  
   })  

export class LoginComponent implements OnInit {  
   constructor(  
      private formBuilder: FormBuilder,  
      private router: Router,  
      public isloginService: IsloginService 
   ) { }  

ngOnInit(){  
      this.isloginService.loginForm = this.formBuilder.group({  
         userid: ['', Validators.required],  
         password: ['', Validators.required]  
      });  
   this.isloginService.returnUrl = '/dashboard';  
   this.isloginService.logout();  
   }  
}