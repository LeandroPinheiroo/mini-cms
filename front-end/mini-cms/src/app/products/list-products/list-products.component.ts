import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  destroy(product:Product){
  }

}
