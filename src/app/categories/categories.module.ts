import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { NewCategoriesComponent } from './new-categories/new-categories.component';



@NgModule({
  declarations: [
    ListCategoriesComponent,
    NewCategoriesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListCategoriesComponent,
    NewCategoriesComponent
  ]
})
export class CategoriesModule { }
