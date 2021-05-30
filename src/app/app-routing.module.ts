import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingFormComponent } from './shopping/shopping-form/shopping-form.component';

const routes: Routes = [
  { path: 'purchase', component: ShoppingFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
