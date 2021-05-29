import { ProductsComponent } from './../shopping/products/products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: 'products', component: ProductsComponent }]),
  ],
})
export class AdminModule {}
