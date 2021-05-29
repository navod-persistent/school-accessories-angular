import { Product } from './product';

export class ShoppingCartItem {
  $key: string;
  title: string;
  imageUrl: string;
  price: number;
  quantity: number;
  category: string;
  constructor(
    key: string,
    title: string,
    imageUrl: string,
    price: number,
    quantity: number,
    category: string
  ) {
    this.$key = key;
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
  }

  get totalPrice() {
    return this.price * this.quantity;
  }
}
