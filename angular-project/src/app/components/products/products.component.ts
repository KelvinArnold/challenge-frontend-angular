// Services
import { ProductsService } from "./../../service/products/products.service";
import { Component, OnInit } from '@angular/core';
import {Product} from './../../class/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  constructor(
    private service: ProductsService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.products = this.service.getProducts();
  }
}
