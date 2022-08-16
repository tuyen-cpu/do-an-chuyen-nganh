import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { DropdownDirective } from 'src/app/directives/dropdown.directive';
@Component({
    selector: 'app-header-manager',
    standalone: true,
    imports: [CommonModule, RouterModule, AvatarModule, AvatarGroupModule, DropdownDirective],
    templateUrl: './header-manager.component.html',
    styleUrls: ['./header-manager.component.scss'],
})
export class HeaderManagerComponent implements OnInit {
    @Output() newItemEvent = new EventEmitter<boolean>();
    isShowSidebar = true;
    currentUser: any;
    constructor(private router: Router) {}

    ngOnInit(): void {}
    addClassToParent() {
        this.isShowSidebar = !this.isShowSidebar;
        this.newItemEvent.emit(this.isShowSidebar);
    }
}
