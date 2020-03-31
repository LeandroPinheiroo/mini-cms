import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';
import { NewProductsComponent } from './new-products/new-products.component';



@NgModule({
  declarations: [
    ListProductsComponent,
    NewProductsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListProductsComponent,
    NewProductsComponent
  ]
})
export class ProductsModule { }
