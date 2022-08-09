import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from './models/product.model';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: ProductModel[] = [];
  filteredText: string;
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
   this.getRouteControl();

  }

    getRouteControl(){
    this.activatedRoute.params.subscribe(param => {
      const id = param['CategoryId'];
      this.getProduct(isNaN(Number(id)) ? 0 : Number(id));
    })
  }

getProduct(categoryId: number){
  if(categoryId > 0){
    debugger;
    this.productService.getProductByCategoryId(categoryId).subscribe(response => {
      this.products = response["value"];
    })
  }
  else{

    this.productService.getProducts().subscribe(response => {
      this.products = response["value"];
    });
  }
}

}
