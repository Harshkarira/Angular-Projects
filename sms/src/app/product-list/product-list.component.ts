import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { product } from '../shared/interfaces/product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  selectedProduct!: product;
  product!: product[]

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.fetchproducts()
  }

  fetchproducts():void{
    this.product = this.productService.fetchproducts();
  }
  selectProduct(product:product){
    this.selectedProduct = product
  }
  getProduct():void{
    this.product = this.productService.fetchproducts();
  }
}
