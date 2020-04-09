import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { ListCategoriesComponent } from 'app/pages/categories/list-categories/list-categories.component';
import { ListProductsComponent } from 'app/pages/products/list-products/list-products.component';
import { NewCategoriesComponent } from 'app/pages/categories/new-categories/new-categories.component';
import { NewProductsComponent } from 'app/pages/products/new-products/new-products.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',        component: DashboardComponent },
    //Cadatros de Categorias
    { path: 'categories',       component: ListCategoriesComponent },
    { path: 'categories/new',   component: NewCategoriesComponent },
    //Cadastros de Produstos
    { path: 'products',         component: ListProductsComponent },
    { path: 'products/new',     component: NewProductsComponent },
];
