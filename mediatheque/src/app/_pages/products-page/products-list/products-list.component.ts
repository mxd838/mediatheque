import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  @Input()
  films: any[] = [];

  @Input()
  albums: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
