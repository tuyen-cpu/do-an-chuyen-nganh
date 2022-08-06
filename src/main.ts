import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from './environments/environment';
import { HeaderComponent } from './app/components/header/header.component';
import { APP_ROUTES } from './app/app-routing';
import { ButtonModule } from 'primeng/button';
if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        // { provide: UserService, useClass: UserService },
        // {provide:BACKEND_URL,useValue:"abc.com"},
        importProvidersFrom(
            BrowserAnimationsModule,
            RouterModule.forRoot(APP_ROUTES, {
                preloadingStrategy: PreloadAllModules,
            }),
        ),
    ],
});
