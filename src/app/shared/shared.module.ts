import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
import { ShoppingCartService } from './services/shopping-cart.service';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { RouterModule } from '@angular/router';
import { EditProductFormComponent } from '../admin/components/edit-product-form/edit-product-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductQuantityComponent, ProductCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'edit-product/:id', component: EditProductFormComponent },
    ]),
  ],
  exports: [ProductQuantityComponent, ProductCardComponent],
  providers: [ShoppingCartService],
})
export class SharedModule {}
