import { HeaderModule } from './components/header/header.module';
import { UserService } from './user.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesstComponent } from './components/tesst/tesst.component';

import { SharedModule } from './shared/shared.module';

//primeng
import { ButtonModule } from 'primeng/button';

@NgModule({
    declarations: [AppComponent, TesstComponent],
    imports: [BrowserModule, AppRoutingModule, SharedModule.forRoot(), HeaderModule, ButtonModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
