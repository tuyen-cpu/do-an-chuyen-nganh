import { ProductService } from './../../services/product.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    standalone: true,
    imports: [CommonModule, RouterModule],
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
    constructor(public productService: ProductService) {}

    ngOnInit(): void {}
    addP() {
        this.productService.products.push(1);
    }
}
