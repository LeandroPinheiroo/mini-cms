import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyMaskModule, CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from "ng2-currency-mask";

import { ListProductsComponent } from './list-products/list-products.component';
import { NewProductsComponent } from './new-products/new-products.component';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "left",
  allowNegative: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: "."
};


@NgModule({
  declarations: [
    ListProductsComponent,
    NewProductsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    CurrencyMaskModule,
  ],
  providers: [
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
  ],
  exports: [
    ListProductsComponent,
    NewProductsComponent
  ]
})
export class ProductsModule { }
