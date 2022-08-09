import { Component, OnInit } from '@angular/core';
import { ProductModel } from './models/product.model';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: ProductModel[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProduct();
   // this.getProduct2();

  }

getProduct(){
  this.productService.getProducts().subscribe(response => {
    this.products = response;


  });
}

// async getProduct2(){
//   await this.productService.getProducts2.then(response =>{
//     debugger;
//   });

// }

}