import { AdminModule } from './../admin/admin.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ShoppingCartService } from '../shared/services/shopping-cart.service';
import { ProductQuantityComponent } from '../shared/product-quantity/product-quantity.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingFormComponent } from './shopping-form/shopping-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CartCheckoutComponent } from './cart-checkout/cart-checkout.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    ShoppingCartComponent,
    ShoppingFormComponent,
    CartCheckoutComponent,
    ProductsComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'shopping-cart', component: ShoppingCartComponent },
    ]),
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    AdminModule,
    CommonModule,
    SharedModule,
  ],
  providers:[
    ShoppingCartService
  ]
})
export class ShoppingModule {}
