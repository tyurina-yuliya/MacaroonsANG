import { Injectable } from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable()
export class ProductService {

  constructor() { }

  count: number = 0;
  public items: ProductType[] = [];

  addItem(product: ProductType): void {
    this.items.push(product);
    this.count++;
  }

  get totalPrice(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  getProducts():ProductType[] {
    return [
      {
        image: 'menu1.png',
        title: 'Макарун с малиной',
        price: 1.70,
      },
      {
        image: 'menu2.png',
        title: 'Макарун с манго',
        price: 1.80,
      },
      {
        image: 'menu3.png',
        title: 'Макарун с ванилью',
        price: 1.90,
      },
      {
        image: 'menu4.png',
        title: 'Макарун с фисташками',
        price: 2.10,
      },
    ];
  }
}
