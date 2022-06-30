import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.scss'],
})
export class ProductsCardComponent implements OnInit {
  @Input()
  media!: any;

  constructor() {}

  ngOnInit(): void {}
}
