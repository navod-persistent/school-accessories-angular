import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../../shared/services/shopping-cart.service";
import {ShoppingCart} from "../../shared/models/shopping-cart";


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart$:ShoppingCart;

  constructor(private shoppingCartService: ShoppingCartService) { }

   async ngOnInit() {
    let items = await this.shoppingCartService.getCart();
    this.cart$ = new ShoppingCart(items);
  }
  clearCart(){
    this.shoppingCartService.clearCart();
  }

}
