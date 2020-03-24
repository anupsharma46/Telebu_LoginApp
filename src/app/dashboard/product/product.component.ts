import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router'; 
import { Item } from '../../interfaces/item';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
   @Input() p_id:number
   @Input() p_name:string;
   @Input() p_price:number;
   @Input() p_img_url:string;

  constructor(private router: Router, public cartServive: CartService) { }
  
  ngOnInit(): void {
  }

}
