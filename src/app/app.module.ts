import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//primeNg
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ImageModule } from 'primeng/image';
//awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from './components/shared/header/header.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';

@NgModule({
    declarations: [AppComponent, DetailProductComponent, HeaderComponent],
    imports: [BrowserModule, AppRoutingModule, FormsModule, FontAwesomeModule, ButtonModule, RadioButtonModule, ImageModule, BrowserAnimationsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
