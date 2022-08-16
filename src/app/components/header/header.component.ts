import { MenubarModule } from 'primeng/menubar';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
    standalone: true,
    imports: [MenubarModule],
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

                routerLink: ['/'],
            },
            {
                label: 'Product',
                items: [
                    {
                        label: 'id',
                        icon: 'pi pi-fw pi-plus',
                        routerLink: 'product/id',
                    },
                ],
                routerLink: 'product',
            },
            {
                label: 'Cart',
                icon: 'pi pi-shopping-cart',
                routerLink: 'cart',
            },
            {
                label: 'Checkout',
                icon: 'pi pi-credit-card',
                routerLink: 'checkout',
            },
            {
                label: 'Authentication',
                icon: 'pi pi-user',
                routerLink: 'auth',
            },
        ];
    }
}
