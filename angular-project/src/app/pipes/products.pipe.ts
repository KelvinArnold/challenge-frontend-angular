import { Pipe, PipeTransform } from '@angular/core';
import {Product} from './../class/product';

@Pipe({
  name: 'showProductos'
})
export class ProductsPipe implements PipeTransform {

  transform(items: Product[]): Product[] {
    return items.filter(item => item.exibir == 1);
  }

}
