import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../../interfaces/item';
import { CartService } from '../../../services/cart.service';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
	public items: Item[] = [];
	public total: number;
	public totalQuantity: number;
	username: string;
	orderbtnVal: boolean=true;

	constructor(private activatedRoute: ActivatedRoute, public cartService: CartService) {}

	buyNow(){
		if(this.items){
		localStorage.removeItem('cart');  
		}
		
	 }

	ngOnInit() {
		this.username = localStorage.getItem('token');
		this.activatedRoute.params.subscribe(params => {
			var id = params['p_id'];
			this.cartService.addToCart(id);
		});
		 this.items = this.cartService.items;
		 this.total = this.cartService.total;
	     this.totalQuantity = this.cartService.totalQuantity;
		
	
	  
	}

	ngDoCheck() {
		this.items = this.cartService.items;
		this.total = this.cartService.total;
		this.totalQuantity = this.cartService.totalQuantity;
		if(this.totalQuantity){
			this.orderbtnVal = false
		}
		
	}
}