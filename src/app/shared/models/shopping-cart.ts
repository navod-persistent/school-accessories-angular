import { Product } from './product';
import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart {
  items: ShoppingCartItem[] = [];
  productId:string = "sfw4";
  constructor( itemsMap:  ShoppingCartItem[]) {
    this.items = itemsMap;
  }

  getQuantity(product: Product) {
    for(var item of this.items){
      if(product.title ==item.title){
        return item.quantity;
      }
    }
    return 0;
  }

  get totalPrice() {
    let sum = 0;
    for (var item  of this.items){
      sum += item.totalPrice;

    }
    return sum;
  }

  get totalItemsCount() {
    let count = 0;
    for (var item of this.items) {
      count += item.quantity;
    }
    return count;
  }
}
