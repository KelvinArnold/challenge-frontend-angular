import {Product} from './../../class/product';
import {formatCurrency} from './../../service/utils';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-produtc-card',
  templateUrl: './produtc-card.component.html',
  styleUrls: ['./produtc-card.component.scss']
})
export class ProdutcCardComponent implements OnInit {
  @Input() product = Product;

  constructor() { }

  ngOnInit() {
  }
  
  formatNumber(num:number) {
    return formatCurrency(num);
  }
  
}
