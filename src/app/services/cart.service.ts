import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item';
import { Product } from '../interfaces/product';
import {ProductService} from '../services/product.service';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  public items: Item[];
  public total: number;
  public totalQuantity: number;
  public loadProductId:number;
  public cartProduct:Product;
  public tempProd: Product;


  constructor(private productService: ProductService) { }

  products = this.productService.getAllProduct();

  findProductId(p_id: number): number {
	this.products[this.getSelectedProductIndex(p_id)].p_stock--;
	  return this.products[this.getSelectedProductIndex(p_id)].p_id;
	
  }

  private getSelectedProductIndex(p_id: number) {
	for (var i = 0; i < this.products.length; i++) {
		if (this.products[i].p_id == p_id) {
			return i;
		}
	}
	return -1;
 }

 findProduct(loadProductId:number): Product {
	return this.products[this.getProductIndex(loadProductId)];
}

private getProductIndex(testId: number) {
  for (var i = 0; i < this.products.length; i++) {
	  if (this.products[i].p_id == testId) {
		  return i;
	  }
  }
  return -1;
}

  addToCart(id:number){

	       if(id){
				var item: Item = {
				    product:undefined,
					productId: this.findProductId(id),
					quantity: 1
				};
				if (localStorage.getItem('cart') == null) {
					let cart: any = [];
					cart.push(JSON.stringify(item));
					localStorage.setItem('cart', JSON.stringify(cart));
					//console.log(this.tempProd.p_stock);
				} else {
					let cart: any = JSON.parse(localStorage.getItem('cart'));
					let index: number = -1;
					for (var i = 0; i < cart.length; i++) {
						let item: Item = JSON.parse(cart[i]);
						if (item.productId == id) {
							index = i;
							break;
						}
					}
					if (index == -1) {
						cart.push(JSON.stringify(item));
						localStorage.setItem('cart', JSON.stringify(cart))
					} else {
						let item: Item = JSON.parse(cart[index]);
						item.quantity += 1;
						cart[index] = JSON.stringify(item);
						localStorage.setItem("cart", JSON.stringify(cart));
					}
				}
			this.loadCart();
			} else {
    	this.loadCart();
			}
  }

  loadCart(): void {
		this.total = 0;
		this.totalQuantity = 0;
		this.items = [];   
	let cart = JSON.parse(localStorage.getItem('cart'));
	 if(cart){
		for (var i = 0; i < cart.length; i++) {
			 let item = JSON.parse(cart[i]);
			 this.loadProductId = item.productId;
			 this.cartProduct= this.findProduct(this.loadProductId);
				this.items.push({
					product:  this.cartProduct,
				    productId: item.productId,
				    quantity: item.quantity
				});
			 this.total += this.cartProduct.p_price * item.quantity;
			 this.totalQuantity += item.quantity;
		}
	}
 }
	
 remove(id:number) {
		let cart: any = JSON.parse(localStorage.getItem('cart'));
		for (var i = 0; i < cart.length; i++) {
			let item: Item = JSON.parse(cart[i]);
			if (item.productId == id) {
				cart.splice(i, 1);
				break;
			}
		}
		localStorage.setItem("cart", JSON.stringify(cart));
		this.loadCart();
  }
}