import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Product } from './../../model/product.model';
import { CartService } from './../../services/cart.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { InputNumberModule } from 'primeng/inputnumber';
@Component({
    standalone: true,
    imports: [CommonModule, RouterModule, TableModule, ButtonModule, InputNumberModule],
    providers: [CartService],
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class CartComponent implements OnInit {
    products: Product[];
    total: number;
    constructor(private cartService: CartService) {}

    ngOnInit(): void {
        this.products = [
            { id: 1, name: 'DC x OP Luffy Attack T-shirt - White', size: 'S', quantity: 10, price: 120000 },
            { id: 2, name: 'DC x OP Luffy Attack T-shirt - White', size: 'M', quantity: 2, price: 130000 },
            { id: 3, name: 'DC x OP Brook T-shirt - Black', size: 'XL', quantity: 10, price: 100000 },
            { id: 4, name: 'DC x OP Brook T-shirt - White', size: 'S', quantity: 10, price: 140000 },
        ];
        this.getTotal();
    }
    getTotal() {
        this.total = this.products.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
    }
    deleteItem(id: number) {
        this.products = this.products.filter((product) => product.id !== id);
        this.getTotal();
        console.log(this.products);
    }
}
