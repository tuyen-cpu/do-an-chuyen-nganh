import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

//primeng
import { MenubarModule } from 'primeng/menubar';

@NgModule({
    declarations: [HeaderComponent],
    imports: [CommonModule, MenubarModule],
})
export class HeaderModule {}
