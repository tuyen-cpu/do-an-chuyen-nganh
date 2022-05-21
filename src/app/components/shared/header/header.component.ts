import { Component, OnInit } from '@angular/core';
import { faSearch, faBagShopping, faUser } from '@fortawesome/free-solid-svg-icons';

interface Menu {
    title?: string;
    icon?: any;
    img?:string,
    routerLink?: string;
}

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    faSearch = faSearch;
    faShoppingBag = faBagShopping;
    faUser = faUser;

    menu: Menu[] = [
        {
            title: 'New in',
            routerLink: '',
        },
        {
            title: 'Tất cả sản phẩm',
            routerLink: '',
        },
        {
            img: 'mybear.svg',
            title: "That's my bear",
            routerLink: '',
        },
        {
            title: 'Cửa hàng',
            routerLink: '',
        },
        {
            title: 'Chính sách',
            routerLink: '',
        },
    ];

    menuSub: Menu[] = [
        { icon: faSearch, routerLink: '' },
        {
            icon: faBagShopping,
            routerLink: '',
        },
        {
            icon: faUser,
            routerLink: '',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
