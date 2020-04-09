import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    
    { path: '/dashboard',   title: 'Home',          icon:'nc-bank',             class: '' },
    { path: '/categories',  title: 'Categorias',    icon:'nc-cart-simple',      class: '' },
    { path: '/products',    title: 'Produtos',      icon:'nc-cart-simple',      class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
