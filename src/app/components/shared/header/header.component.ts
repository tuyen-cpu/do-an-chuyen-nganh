import { Component, OnInit } from '@angular/core';
import { faSearch, faBagShopping, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faSearch = faSearch;
  faShoppingBag = faBagShopping;
  faUser = faUser;

  constructor() {}

  ngOnInit(): void {}
}
