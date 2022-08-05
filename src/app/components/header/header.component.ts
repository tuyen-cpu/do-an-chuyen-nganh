import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    items: MenuItem[];
    constructor() {}

    ngOnInit(): void {
        this.items = [
            {
                label: 'Home',
                items: [],
                routerLink: ['/'],
            },
            {
                label: 'Product',
                items: [],
                routerLink: ['/product'],
            },
            {
                label: 'Cart',
                icon: 'pi pi-shopping-cart',
                routerLink: ['/cart'],
            },
            {
                label: 'Checkout',
                icon: 'pi pi-credit-card',
                routerLink: ['/checkout'],
            },
        ];
    }
}
