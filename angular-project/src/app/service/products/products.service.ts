import { Injectable } from '@angular/core';
import {Product} from './../../class/product';
import Products from './../../service/json/produtos.json';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor() { }

  getProducts(): Product[] {
    return Products;
  }
}
