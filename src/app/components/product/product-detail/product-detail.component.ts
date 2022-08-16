import { Component, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ButtonModule } from 'primeng/button';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
    standalone: true,
    imports: [GalleriaModule, ButtonModule, SelectButtonModule, FormsModule],
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
    idProduct: number;
    product: any;
    sizeSelected: any;
    sizes = [
        { name: 'Size S', code: 's' },
        { name: 'Size M', code: 'm' },
        { name: 'Size L', code: 'l' },
        { name: 'Size XL', code: 'xl' },
    ];
    selectedSize: any;
    images: any[] = [
        {
            previewImageSrc: 'https://bizweb.sapocdn.net/100/369/010/products/13-495eac7d-22c5-45e5-8bd8-7b9118483bd3.jpg?v=1657986683290',
            thumbnailImageSrc: 'https://bizweb.sapocdn.net/100/369/010/products/13-495eac7d-22c5-45e5-8bd8-7b9118483bd3.jpg?v=1657986683290',
            alt: 'Description for Image 1',
            title: 'Title 1',
        },
        {
            previewImageSrc: 'https://bizweb.sapocdn.net/100/369/010/products/13-495eac7d-22c5-45e5-8bd8-7b9118483bd3.jpg?v=1657986683290',
            thumbnailImageSrc: 'https://bizweb.sapocdn.net/100/369/010/products/13-495eac7d-22c5-45e5-8bd8-7b9118483bd3.jpg?v=1657986683290',
            alt: 'Description for Image 2',
            title: 'Title 2',
        },
        {
            previewImageSrc: 'https://bizweb.sapocdn.net/100/369/010/products/13-495eac7d-22c5-45e5-8bd8-7b9118483bd3.jpg?v=1657986683290',
            thumbnailImageSrc: 'https://bizweb.sapocdn.net/100/369/010/products/13-495eac7d-22c5-45e5-8bd8-7b9118483bd3.jpg?v=1657986683290',
            alt: 'Description for Image 3',
            title: 'Title 3',
        },
        {
            previewImageSrc: 'https://bizweb.sapocdn.net/100/369/010/products/13-495eac7d-22c5-45e5-8bd8-7b9118483bd3.jpg?v=1657986683290',
            thumbnailImageSrc: 'https://bizweb.sapocdn.net/100/369/010/products/13-495eac7d-22c5-45e5-8bd8-7b9118483bd3.jpg?v=1657986683290',
            alt: 'Description for Image 4',
            title: 'Title 4',
        },
        {
            previewImageSrc: 'https://bizweb.sapocdn.net/100/369/010/products/13-495eac7d-22c5-45e5-8bd8-7b9118483bd3.jpg?v=1657986683290',
            thumbnailImageSrc: 'https://bizweb.sapocdn.net/100/369/010/products/13-495eac7d-22c5-45e5-8bd8-7b9118483bd3.jpg?v=1657986683290',
            alt: 'Description for Image 5',
            title: 'Title 5',
        },
        {
            previewImageSrc: 'https://bizweb.sapocdn.net/100/369/010/products/13-495eac7d-22c5-45e5-8bd8-7b9118483bd3.jpg?v=1657986683290',
            thumbnailImageSrc: 'https://bizweb.sapocdn.net/100/369/010/products/13-495eac7d-22c5-45e5-8bd8-7b9118483bd3.jpg?v=1657986683290',
            alt: 'Description for Image 6',
            title: 'Title 6',
        },
        {
            previewImageSrc: 'dhttps://bizweb.sapocdn.net/100/369/010/products/13-495eac7d-22c5-45e5-8bd8-7b9118483bd3.jpg?v=1657986683290',
            thumbnailImageSrc: 'https://bizweb.sapocdn.net/100/369/010/products/13-495eac7d-22c5-45e5-8bd8-7b9118483bd3.jpg?v=1657986683290',
            alt: 'Description for Image 7',
            title: 'Title 7',
        },
        {
            previewImageSrc: 'https://bizweb.sapocdn.net/100/369/010/products/13-495eac7d-22c5-45e5-8bd8-7b9118483bd3.jpg?v=1657986683290',
            thumbnailImageSrc: 'https://bizweb.sapocdn.net/100/369/010/products/13-495eac7d-22c5-45e5-8bd8-7b9118483bd3.jpg?v=1657986683290',
            alt: 'Description for Image 8',
            title: 'Title 8',
        },
        {
            previewImageSrc: 'https://bizweb.sapocdn.net/100/369/010/products/13-495eac7d-22c5-45e5-8bd8-7b9118483bd3.jpg?v=1657986683290',
            thumbnailImageSrc: 'https://bizweb.sapocdn.net/100/369/010/products/13-495eac7d-22c5-45e5-8bd8-7b9118483bd3.jpg?v=1657986683290',
            alt: 'Description for Image 9',
            title: 'Title 9',
        },
        {
            previewImageSrc: 'https://bizweb.sapocdn.net/100/369/010/products/13-495eac7d-22c5-45e5-8bd8-7b9118483bd3.jpg?v=1657986683290',
            thumbnailImageSrc: 'https://bizweb.sapocdn.net/100/369/010/products/13-495eac7d-22c5-45e5-8bd8-7b9118483bd3.jpg?v=1657986683290',
            alt: 'Description for Image 10',
            title: 'Title 10',
        },
    ];
    size = [{}];
    constructor(private router: Router, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.params.subscribe((param: Params) => {
            this.idProduct = param['id'];
            console.log(this.idProduct);
        });
    }
    onSelectedSize(event: any) {
        this.sizeSelected = event.value;
        console.log(this.sizeSelected);
    }
}
