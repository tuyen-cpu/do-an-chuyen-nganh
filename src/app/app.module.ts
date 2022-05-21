import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//primeNg
import { ButtonModule } from 'primeng/button';

//awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from './components/shared/header/header.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';

@NgModule({
  declarations: [AppComponent, DetailProductComponent,
    HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
