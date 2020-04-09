import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
//Components
import { ListCategoriesComponent } from './pages/categories/list-categories/list-categories.component';
import { NewCategoriesComponent } from './pages/categories/new-categories/new-categories.component';
import { ListProductsComponent } from './pages/products/list-products/list-products.component';
import { NewProductsComponent } from './pages/products/new-products/new-products.component';
export const AppRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  //Categories Routes
  { 
    path: 'categories', 
    component: ListCategoriesComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }] 
  },
  { 
    path: 'categories/new',
    component: NewCategoriesComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }] 
  },
  { 
    path: 'categories/edit/:id', component: NewCategoriesComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  },
  //Products Routes
  { 
    path: 'products', component: ListProductsComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  },
  { 
    path: 'products/new', component: NewProductsComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  },
  { 
    path: 'products/edit/:id', component: NewProductsComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  },
]
