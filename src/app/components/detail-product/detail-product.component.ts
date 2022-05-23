import { Component, ElementRef, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-detail-product',
    templateUrl: './detail-product.component.html',
    styleUrls: ['./detail-product.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class DetailProductComponent implements OnInit {
    selectedSize: any = null;
    isShowSizeBoard = false;
    product: any;
    sizes: any[] = [
        { id: '123', name: 'S' },
        { id: '124', name: 'M' },
        { id: '125', name: 'L' },
        { id: '126', name: 'XL' },
        { id: '127', name: 'XXL' },
    ];
    listImg: any[] = [
        'https://happyhow.me/1111111111111111111/images/mobile/1512003931000016901_happyhow_ao-polo_basicbear_040722-4.jpeg',
        'https://happyhow.me/1111111111111111111/images/mobile/1512003928693149699_happyhow_ao-polo_basicbear_040722-1.jpeg',
        'https://happyhow.me/1111111111111111111/images/mobile/1512003927455830017_happyhow_ao-polo_basicbear_040722-10.jpeg',
        'https://happyhow.me/1111111111111111111/images/mobile/1512003928005283842_happyhow_ao-polo_basicbear_040722-8.jpeg',
        'https://happyhow.me/1111111111111111111/images/mobile/1512003926814101504_happyhow_ao-polo_basicbear_040722-7.jpeg',
        'https://happyhow.me/1111111111111111111/images/mobile/1512336232871366656_happyhow_ao-polo_basicbear_08042022-1.gif',
    ];
    selectedCategory: any = null;

    constructor(private renderer: Renderer2, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.selectedSize = this.sizes[0].name;
    }
    onToggleImage(element: ElementRef) {
        this.isShowSizeBoard = !this.isShowSizeBoard;
        console.log(this.isShowSizeBoard);
        if (this.isShowSizeBoard) {
            this.renderer.addClass(element, 'is-show');
        } else {
            this.renderer.removeClass(element, 'is-show');
        }
    }
    getParamsUrl() {
        this.route.paramMap.subscribe((params) => {
            var id = params.get('id');
            console.log(id);
        });
    }
    onChangeSize() {}
}
