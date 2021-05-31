import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
import { ShoppingCartService } from './services/shopping-cart.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [ProductQuantityComponent, ProductCardComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild([])],
  exports: [ProductQuantityComponent, ProductCardComponent],
  providers: [ShoppingCartService],
})
export class SharedModule {}
