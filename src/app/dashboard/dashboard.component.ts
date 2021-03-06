import { Component, OnInit,ElementRef } from '@angular/core';  
import {ProductService} from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({  
  selector: 'app-dashboard',  
  templateUrl: './dashboard.component.html',  
  styleUrls: ['./dashboard.component.scss']  
})  
export class DashboardComponent implements OnInit {  
  constructor(private productService: ProductService, public cartService: CartService ) { } 

  products = this.productService.getAllProduct();

  totalQuantity: number;

  ngOnInit() { }
  
  ngDoCheck() {
    this.totalQuantity = this.cartService.totalQuantity;
  }  
} 