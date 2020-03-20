import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { IsloginService } from '../services/islogin.service' 

@Injectable({
  providedIn: 'root'
})

export class Auth2Guard implements CanActivate {
  constructor(private router: Router,  private isloginService: IsloginService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {     
    if (!this.isloginService.isLoggedIn()) {   
      return true;      
   }         

   this.router.navigate(['/dashboard']);      
   return false; 
  
}
}
