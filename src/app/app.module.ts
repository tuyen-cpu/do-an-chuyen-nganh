import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesstComponent } from './components/tesst/tesst.component';

//primeng
import { ButtonModule } from 'primeng/button';

@NgModule({
    declarations: [AppComponent, TesstComponent],
    imports: [BrowserModule, AppRoutingModule, ButtonModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
