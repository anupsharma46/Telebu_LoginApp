import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public PRODUCTS: Product[];
  prodName: Product;
  p_id: number;

  constructor() {
    this.PRODUCTS= [
      { p_id: 1, p_name: 'Laptop', p_price:100,p_stock:8, p_desc:" Angular is running in the development",p_img_url:"https://rukminim1.flixcart.com/image/150/150/jzrb53k0pkrrdj/computer/r/b/h/asus-na-laptop-original-imafffw5ka8ah7ha.jpeg?q=70"},
      { p_id: 2, p_name: 'SmartWatch',p_price:200,p_stock:5,p_desc:" Angular is running in the development", p_img_url:"https://rukminim1.flixcart.com/image/612/612/smartwatch/9/k/y/sw-242-diamoda-original-imaeqgeetuhmzqrq.jpeg?q=70"},
      { p_id: 3, p_name: 'TheRudest',p_price:600,p_stock:4,p_desc:" Angular is running in the development",p_img_url:"https://rukminim1.flixcart.com/image/612/612/k3dc7m80/book/4/3/9/the-rudest-book-ever-original-imafmgbcvbwrztbt.jpeg?q=70"},
      { p_id: 4, p_name: 'UPSC',p_price:900,p_stock:3,p_desc:" Angular is running in the development",p_img_url:"https://rukminim1.flixcart.com/image/612/612/jwzabgw0/book/3/8/0/25-years-upsc-ias-ips-prelims-topic-wise-solved-papers-1-2-1995-original-imafhjd85x3hcyrc.jpeg?q=70"},
      { p_id: 5, p_name: 'Flask',p_price:200,p_stock:1,p_desc:" Angular is running in the development",p_img_url:"https://rukminim1.flixcart.com/image/612/612/k4k7f680/bottle/a/j/p/1000-thermosteel-flip-lid-1000-ml-flask-ts-261-milton-original-imafnfmgxtb2jfrw.jpeg?q=70"},
      { p_id: 6, p_name: 'Mobile' ,p_price:200,p_stock:6,p_desc:" Angular is running in the development",p_img_url:"https://rukminim1.flixcart.com/image/312/312/jsdj8nk0/mobile/7/n/z/samsung-galaxy-s10-plus-sm-g975fckgins-original-imafdys4d6h8phu6.jpeg?q=70"},
      { p_id: 7, p_name: 'Iron',p_price:200,p_stock:10,p_desc:" Angular is running in the development",p_img_url:"https://rukminim1.flixcart.com/image/612/612/iron/u/w/8/bajaj-dx6-original-imaefuzzjgux5nqz.jpeg?q=70"},
      { p_id: 8, p_name: 'TV' ,p_price:200,p_stock:1,p_desc:" Angular is running in the development",p_img_url:"https://rukminim1.flixcart.com/image/312/312/k2w6xe80/television/v/5/7/iffalcon-55k31-original-imafm59fa7ftgpkm.jpeg?q=70"},
      { p_id: 9, p_name: 'Wall Lamp' ,p_price:200, p_stock:10,p_desc:" Angular is running in the development",p_img_url:"https://rukminim1.flixcart.com/image/612/612/jtsz3bk0/wall-lamp/f/x/f/walllampnewitem-mj882-plus-products-original-imaf42esb5ttrpwz.jpeg?q=70"},
      { p_id: 10, p_name: 'Gate Lamp' ,p_price:200,p_stock:5,p_desc:" Angular is running in the development",p_img_url:"https://rukminim1.flixcart.com/image/612/612/k70spzk0/wall-lamp/5/s/y/designer-led-sconce-glass-wood-wall-lamp-light-re080-afast-original-imafpck8br8mj6bv.jpeg?q=70"},
      { p_id: 11, p_name: 'Laptop' ,p_price:200,p_stock:7,p_desc:" Angular is running in the development",p_img_url:"https://rukminim1.flixcart.com/image/150/150/jzrb53k0pkrrdj/computer/r/b/h/asus-na-laptop-original-imafffw5ka8ah7ha.jpeg?q=70"}
    ];
    }

  getAllProduct(){
      return this.PRODUCTS;
    }

  findProductbyRouteId(p_id:number){
    this.prodName = this.PRODUCTS.find( product => product.p_id === p_id);
  }
}
