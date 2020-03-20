import { Injectable } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public PRODUCTS: Product[];
  prodName: Product;
  p_id: number;

  constructor() {
    this.PRODUCTS= [
      { p_id: 1, p_name: 'Laptop', p_price:100,p_desc:" Angular is running in the development",p_img_url:"https://rukminim1.flixcart.com/image/150/150/jzrb53k0pkrrdj/computer/r/b/h/asus-na-laptop-original-imafffw5ka8ah7ha.jpeg?q=70" },
      { p_id: 2, p_name: 'SmartWatch',p_price:200,p_desc:" Angular is running in the development", p_img_url:"https://rukminim1.flixcart.com/image/612/612/smartwatch/9/k/y/sw-242-diamoda-original-imaeqgeetuhmzqrq.jpeg?q=70" },
      { p_id: 3, p_name: 'TheRudest',p_price:600,p_desc:" Angular is running in the development",p_img_url:"https://rukminim1.flixcart.com/image/612/612/k3dc7m80/book/4/3/9/the-rudest-book-ever-original-imafmgbcvbwrztbt.jpeg?q=70" },
      { p_id: 4, p_name: 'UPSC',p_price:900,p_desc:" Angular is running in the development",p_img_url:"https://rukminim1.flixcart.com/image/612/612/jwzabgw0/book/3/8/0/25-years-upsc-ias-ips-prelims-topic-wise-solved-papers-1-2-1995-original-imafhjd85x3hcyrc.jpeg?q=70" },
      { p_id: 5, p_name: 'Laptop',p_price:200,p_desc:" Angular is running in the development",p_img_url:"https://rukminim1.flixcart.com/image/150/150/jzrb53k0pkrrdj/computer/r/b/h/asus-na-laptop-original-imafffw5ka8ah7ha.jpeg?q=70"},
      { p_id: 6, p_name: 'UPSC' ,p_price:200,p_desc:" Angular is running in the development",p_img_url:"https://rukminim1.flixcart.com/image/612/612/jwzabgw0/book/3/8/0/25-years-upsc-ias-ips-prelims-topic-wise-solved-papers-1-2-1995-original-imafhjd85x3hcyrc.jpeg?q=70" },
      { p_id: 7, p_name: 'Laptop',p_price:200,p_desc:" Angular is running in the development",p_img_url:"https://rukminim1.flixcart.com/image/150/150/jzrb53k0pkrrdj/computer/r/b/h/asus-na-laptop-original-imafffw5ka8ah7ha.jpeg?q=70" },
      { p_id: 8, p_name: 'Laptop' ,p_price:200,p_desc:" Angular is running in the development",p_img_url:"https://rukminim1.flixcart.com/image/150/150/jzrb53k0pkrrdj/computer/r/b/h/asus-na-laptop-original-imafffw5ka8ah7ha.jpeg?q=70"},
      { p_id: 9, p_name: 'Product 9' ,p_price:200,p_desc:" Angular is running in the development",p_img_url:"https://rukminim1.flixcart.com/image/150/150/jzrb53k0pkrrdj/computer/r/b/h/asus-na-laptop-original-imafffw5ka8ah7ha.jpeg?q=70"},
      { p_id: 10, p_name: 'Product 10' ,p_price:200,p_desc:" Angular is running in the development",p_img_url:"https://rukminim1.flixcart.com/image/150/150/jzrb53k0pkrrdj/computer/r/b/h/asus-na-laptop-original-imafffw5ka8ah7ha.jpeg?q=70"},
      { p_id: 11, p_name: 'Product 11' ,p_price:200,p_desc:" Angular is running in the development",p_img_url:"https://rukminim1.flixcart.com/image/150/150/jzrb53k0pkrrdj/computer/r/b/h/asus-na-laptop-original-imafffw5ka8ah7ha.jpeg?q=70"}
    ];
    }

  getAllProduct(){
      return this.PRODUCTS;
    }

  findProductbyRouteId(p_id:number){
    this.prodName = this.PRODUCTS.find( product => product.p_id === p_id);
  }
}
