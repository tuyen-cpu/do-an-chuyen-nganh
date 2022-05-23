import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/model.interface';

@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
    @Input() product: Product;
    displayModal: boolean;
    sizeQuantity: number;

    constructor() {}

    ngOnInit(): void {}
    showModalDialog() {
        this.displayModal = true;
    }
    onChooseSize(id: number) {
        this.sizeQuantity = this.product.size[id - 1].quantity;
    }
    addToCart() {}
}
