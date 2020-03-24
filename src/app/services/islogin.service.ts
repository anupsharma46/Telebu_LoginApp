import {Injectable} from '@angular/core';
import { Login } from '../interfaces/login';  
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Product } from '../interfaces/product';
import {ProductService} from '../services/product.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class IsloginService{

constructor(private router: Router, public productService: ProductService){}

prodcuts = this.productService.getAllProduct();

model: Login[] = [
                    {userid:"admin", password:"admin"},
                    {userid:"test", password:"test"},
                    {userid:"anup", password:"123"},
                    {userid:"user", password:"123"}
                 ]; 
             
    message: string; 
    returnUrl: string; 
    loginForm: FormGroup; 
    i: number;

logout() : void {    
        localStorage.setItem('isLoggedIn','false');    
        localStorage.removeItem('token');  
        localStorage.clear();    
        }  

public isLoggedIn(): boolean {      
    let status = false;      
    if (localStorage.getItem('isLoggedIn') == "true") {      
        status = true;      
      }    
    else {      
          status = false;      
       }      
    return status;      
}

 getProduct(p_id: number): Observable<Product> {
        return of(this.prodcuts.find(product => product.p_id === p_id));
      }

 get f() { return this.loginForm.controls; }  

    login() {  
        for(this.i=0; this.i < this.model.length; this.i++) {
            if (this.f.userid.value == this.model[this.i].userid && this.f.password.value == this.model[this.i].password) {  
                console.log("Login successful");  
                localStorage.setItem('isLoggedIn', "true");  
                localStorage.setItem('token', this.f.userid.value);  
                this.router.navigate([this.returnUrl]);  
                }  
               else { 
                this.message = "Enter correct usename and password"; 
               
               }
        }  
       } 
}