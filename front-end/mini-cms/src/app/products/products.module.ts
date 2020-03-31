import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ListProductsComponent } from './list-products/list-products.component';
import { NewProductsComponent } from './new-products/new-products.component';



@NgModule({
  declarations: [
    ListProductsComponent,
    NewProductsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    ListProductsComponent,
    NewProductsComponent
  ]
})
export class ProductsModule { }
