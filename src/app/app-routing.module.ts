import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './products/components/product/product.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { NotFoundError } from 'rxjs';

const routes: Routes = [
  {path:"",redirectTo:"products",pathMatch:'full'},
  {path:"products",component:ProductComponent},
  {path:"cart",component:CartComponent},
  {path:"detail/:id",component:ProductDetailsComponent},
  {path:"**",component:NotFoundError}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
