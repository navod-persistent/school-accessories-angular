import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ShoppingCartItem } from '../models/shopping-cart-item';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  items: ShoppingCartItem[] = [];

  constructor(private http: HttpClient) {
    this.items.push(
      new ShoppingCartItem(
        1,
        'NataraJ pencil',
        'assets/imgs/pencil.jpg',
        56,
        2,
        1,
        ''
      )
    );
    this.items.push(
      new ShoppingCartItem(
        2,
        'Book 120',
        'assets/imgs/book.jpg',
        140,
        4,
        2,
        'books'
      )
    );
    this.items.push(
      new ShoppingCartItem(
        3,
        'School Bag Large',
        'assets/imgs/bag.jpg',
        1450,
        1,
        3,
        'bag'
      )
    );
  }

  getCart(): ShoppingCartItem[] {
    // const shoppingCartitems = this.http.get<ShoppingCartItem[]>('assets/json/shopping-cart-test.json');
    return this.items;
  }

  addToCart(product: Product) {
    for (var item of this.items) {
      if (item.title == product.title) {
        item.quantity++;
        return;
      }
    }
    this.items.push(
      new ShoppingCartItem(
        product.category_id,
        product.title,
        product.image,
        product.price,
        1,
        product.category_id,
        product.descript
      )
    );
  }
  removeFromCart(product: Product) {
    for (var item of this.items) {
      if (item.title == product.title) {
        if (item.quantity > 1) item.quantity--;
        return;
      }
    }
  }
  clearCart() {
    if (confirm('Remove all items from Cart?')) {
      while (this.items.length > 0) {
        this.items.pop();
      }
    } else {
      return;
    }
  }
}
