import { MenubarModule } from 'primeng/menubar';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
    standalone: true,
    imports: [CommonModule, MenubarModule, InputTextModule, FormsModule],
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    items: MenuItem[];
    valueSearch: string = '';
    constructor() {}

    ngOnInit(): void {
        this.items = [
            {
                label: 'Home',

                routerLink: ['/'],
            },
            {
                label: 'Shop',

                routerLink: 'product',
            },
            {
                label: 'Admin',

                routerLink: 'admin',
            },
        ];
    }
    onSearch() {
        console.log(this.valueSearch);
    }
}
