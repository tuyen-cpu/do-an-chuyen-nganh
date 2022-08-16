import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { UserService } from 'src/app/services/user.service';

@Component({
    standalone: true,
    imports: [CommonModule],
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
    product: Product = {
        name: 'DC x OP Luffy Raglan Hoodie - Multicolor',
        price: 1000000,
        urlImage: 'product1.jpg',
    };

    constructor(public userService: UserService) {}

    ngOnInit(): void {}
}
