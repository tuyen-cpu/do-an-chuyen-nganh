import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-manager',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.scss']
})
export class ProductManagerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
