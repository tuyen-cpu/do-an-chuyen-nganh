import { Component, OnInit } from '@angular/core';
import { Product, Size } from 'src/app/shared/model.interface';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
    size: Size[] = [];
    products: Product[] = [
        {
            id: 1,
            name: 'Áo Polo Nam Leno Họa Tiết Glen  ',
            price: 400000,
            discount: 0,
            img: [
                { id: 1, source: 'product-1.jpeg' },
                { id: 2, source: 'product-1.jpeg' },
                { id: 3, source: 'product-1.jpeg' },
            ],
            size: [
                { id: 1, sizeName: 'M', quantity: 5 },
                { id: 2, sizeName: 'L', quantity: 3 },
                { id: 3, sizeName: 'XL', quantity: 1 },
                { id: 3, sizeName: 'XXL', quantity: 1 },
            ],
        },
        {
            id: 1,
            name: 'Áo Polo Nam BasicBear Chất Vải CVC',
            price: 100000,
            discount: 0,
            img: [
                { id: 1, source: 'product-1.jpeg' },
                { id: 2, source: 'product-1.jpeg' },
                { id: 3, source: 'product-1.jpeg' },
            ],
            size: [
                { id: 1, sizeName: 'M', quantity: 5 },
                { id: 2, sizeName: 'L', quantity: 3 },
                { id: 3, sizeName: 'XL', quantity: 1 },
                { id: 3, sizeName: 'XXL', quantity: 1 },
            ],
        },
        {
            id: 1,
            name: 'Áo Thun Nam MyBear Chất Vải CVC',
            price: 200000,
            discount: 0,
            img: [
                { id: 1, source: 'product-1.jpeg' },
                { id: 2, source: 'product-1.jpeg' },
                { id: 3, source: 'product-1.jpeg' },
            ],
            size: [
                { id: 1, sizeName: 'M', quantity: 5 },
                { id: 2, sizeName: 'L', quantity: 3 },
                { id: 3, sizeName: 'XL', quantity: 1 },
                { id: 3, sizeName: 'XXL', quantity: 1 },
            ],
        },
        {
            id: 1,
            name: 'Áo Polo Nam OriginalBear Chất Vải CVC',
            price: 500000,
            discount: 0,
            img: [
                { id: 1, source: 'product-1.jpeg' },
                { id: 2, source: 'product-1.jpeg' },
                { id: 3, source: 'product-1.jpeg' },
            ],
            size: [
                { id: 1, sizeName: 'M', quantity: 5 },
                { id: 2, sizeName: 'L', quantity: 3 },
                { id: 3, sizeName: 'XL', quantity: 1 },
                { id: 3, sizeName: 'XXL', quantity: 1 },
            ],
        },
        {
            id: 1,
            name: 'Áo Polo Nam Fly Chất Vải CVC',
            price: 600000,
            discount: 0,
            img: [
                { id: 1, source: 'product-1.jpeg' },
                { id: 2, source: 'product-1.jpeg' },
                { id: 3, source: 'product-1.jpeg' },
            ],
            size: [
                { id: 1, sizeName: 'M', quantity: 5 },
                { id: 2, sizeName: 'L', quantity: 3 },
                { id: 3, sizeName: 'XL', quantity: 1 },
                { id: 3, sizeName: 'XXL', quantity: 1 },
            ],
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
