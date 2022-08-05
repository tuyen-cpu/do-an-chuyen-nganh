import { ProductComponent } from './product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [ProductComponent, ProductDetailComponent, ProductListComponent],
    imports: [CommonModule, ProductRoutingModule, SharedModule],
})
export class ProductModule {}
