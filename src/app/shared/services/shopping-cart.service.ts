import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {ShoppingCartItem} from "../models/shopping-cart-item";
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  items: ShoppingCartItem[]=[];

  constructor(private http: HttpClient) {
    this.items.push(new ShoppingCartItem("key1","NataraJ pencil","assets/imgs/pencil.jpg",56,2,"pencils"));
    this.items.push(new ShoppingCartItem("key2","Book 120","assets/imgs/book.jpg",140,4,"books"));
    this.items.push(new ShoppingCartItem("key3","School Bag Large","assets/imgs/bag.jpg",1450,1,"bag"))
  }

   getCart():ShoppingCartItem[]{

  // const shoppingCartitems = this.http.get<ShoppingCartItem[]>('assets/json/shopping-cart-test.json');
     return this.items;
  }

  addToCart(product:Product){
    for(var item of this.items){
      if (item.title== product.title){
           item.quantity++;
           return;
      }
    }
    this.items.push(new ShoppingCartItem(product.$key,product.title,product.imageUrl,product.price,1,product.category));
  }
  removeFromCart(product:Product) {
    for (var item of this.items) {
      if (item.title == product.title) {
        if(item.quantity>1)
            item.quantity--;
        return;
      }
    }
  }
  clearCart(){
      if(confirm("Remove all items from Cart?")){
        while(this.items.length>0) {
          this.items.pop();
        }
        }else{
            return;
      }
    }

}
