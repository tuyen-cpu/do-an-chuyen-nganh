import { HomeComponent } from './components/home/home.component';
import { NavigationStart, Router, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent, HomeComponent],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'dacn';
    isShowHeaderAndFooter: boolean = false;
    constructor(private router: Router) {
        router.events.forEach((event) => {
            if (event instanceof NavigationStart) {
                if (event['url'].includes('/admin')) {
                    this.isShowHeaderAndFooter = false;
                } else {
                    this.isShowHeaderAndFooter = true;
                }
            }
        });
    }
}
