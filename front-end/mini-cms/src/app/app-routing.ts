//Modules
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from '@angular/core';
//Components
import { ListCategoriesComponent } from './categories/list-categories/list-categories.component';
import { NewCategoriesComponent } from './categories/new-categories/new-categories.component';
import { ListProductsComponent } from './products/list-products/list-products.component';
import { NewProductsComponent } from './products/new-products/new-products.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    //Categories Routes
    { path: 'categories', component: ListCategoriesComponent },
    { path: 'categories/new', component: NewCategoriesComponent },
    { path: 'categories/edit/:id', component: NewCategoriesComponent },
    //Products Routes
    { path: 'products', component: ListProductsComponent },
    { path: 'products/new', component: NewProductsComponent },
    { path: 'products/edit/:id', component: NewProductsComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);