import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-tesst',
    templateUrl: './tesst.component.html',
    styleUrls: ['./tesst.component.scss'],
})
export class TesstComponent implements OnInit {
    constructor(public userService: UserService) {}

    ngOnInit(): void {}
    login() {
        this.userService.user.name = 'Tuyen doi ten';
    }
    logout() {
        this.userService.user.name = 'Tuyen logout';
    }
}
