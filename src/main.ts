import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from './environments/environment';
import { APP_ROUTES } from './app/app-routing';

//primeng
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        // { provide: UserService, useClass: UserService },
        // {provide:BACKEND_URL,useValue:"abc.com"},
        importProvidersFrom(
            BrowserAnimationsModule,
            HttpClientModule,
            RouterModule.forRoot(APP_ROUTES, {
                preloadingStrategy: PreloadAllModules,
            }),
        ),
    ],
});
