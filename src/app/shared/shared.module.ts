import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShoppingModule} from "../shopping/shopping.module";
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
import {ShoppingCartService} from "./services/shopping-cart.service";



@NgModule({
  declarations: [
    ProductQuantityComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ProductQuantityComponent,

  ],
  providers:[
    ShoppingCartService
  ]
})
export class SharedModule { }
