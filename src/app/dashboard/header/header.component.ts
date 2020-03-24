import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IsloginService } from '../../services/islogin.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username: string;
  constructor(private router: Router, private isloginService: IsloginService) { }

  ngOnInit() {
    this.username = localStorage.getItem('token');
  }

  logout() {
    this.isloginService.logout();
    this.router.navigate(['/login']);
  }
}
