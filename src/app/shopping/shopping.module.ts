import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ShoppingCartService } from '../shared/services/shopping-cart.service';
import { ProductQuantityComponent } from '../shared/product-quantity/product-quantity.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [ShoppingCartComponent, ProductsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'shopping-cart', component: ShoppingCartComponent },
    ]),
  ],
  providers: [ShoppingCartService, ProductQuantityComponent],
})
export class ShoppingModule {}
