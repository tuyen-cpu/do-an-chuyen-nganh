import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//primeNg
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'primeng/carousel';

//awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from './components/shared/header/header.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductItemComponent } from './components/product/product-list/product-item/product-item.component';

@NgModule({
    declarations: [AppComponent, DetailProductComponent, HeaderComponent, ProductListComponent, ProductItemComponent],
    imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, ButtonModule, CardModule, DialogModule, BrowserAnimationsModule, CarouselModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
