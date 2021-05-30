import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartCheckoutComponent } from './shopping/cart-checkout/cart-checkout.component';
import { ShoppingFormComponent } from './shopping/shopping-form/shopping-form.component';

const routes: Routes = [
  { path: 'purchase', component: ShoppingFormComponent },
  { path: 'cart-checkout', component: CartCheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
