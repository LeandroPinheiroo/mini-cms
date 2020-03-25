import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { ListCategoriesComponent } from './categories/list-categories/list-categories.component';
import { NewCategoriesComponent } from './categories/new-categories/new-categories.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'categories', component: ListCategoriesComponent },
    { path: 'categories/new', component: NewCategoriesComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);