import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { NewCategoriesComponent } from './new-categories/new-categories.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
  


@NgModule({
  declarations: [
    ListCategoriesComponent,
    NewCategoriesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
  ],
  exports: [
    ListCategoriesComponent,
    NewCategoriesComponent
  ]
})
export class CategoriesModule { }
