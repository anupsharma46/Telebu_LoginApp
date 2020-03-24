import { Component, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/product';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { ProductService } from '../../../services/product.service';
import { CartService } from '../../../services/cart.service'; 
@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.scss']
})

export class ProductinfoComponent implements OnInit {
  prodName: Product;
  p_id: number;
  totalQuantity: number;
  constructor(
     private router: Router,
     private route: ActivatedRoute, private location: Location,
     public productService:ProductService,
     public cartService: CartService
     ) { }
 
ngOnInit(): void {
  this.route.params.subscribe(params => { this.p_id = +params['p_id']});
  this.productService.findProductbyRouteId(this.p_id);
  this.prodName= this.productService.prodName;
  }

  ngDoCheck() {
    this.totalQuantity = this.cartService.totalQuantity;
  }  
}
