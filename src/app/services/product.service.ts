import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    products: any[] = [1, 2, 3];
    constructor() {}
}
