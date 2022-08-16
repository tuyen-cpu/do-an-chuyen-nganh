import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderManagerComponent } from './header-manager/header-manager.component';

@Component({
    selector: 'app-admin',
    standalone: true,
    imports: [CommonModule, RouterModule, HeaderManagerComponent],
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
    isShowSidebar = true;
    constructor() {}
    ngOnInit(): void {}
    showSidebar(isShowSidebar: boolean) {
        this.isShowSidebar = isShowSidebar;
    }
}
