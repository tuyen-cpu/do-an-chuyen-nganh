import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
    standalone: true,
    imports: [RouterModule, HeaderComponent, FooterComponent, HomeComponent],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'dacn';
}
