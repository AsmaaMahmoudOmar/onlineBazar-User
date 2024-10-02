import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from '../products/components/product/product.component';
import { ProductsModule } from '../products/products.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    ProductsModule,
    SharedModule,
    FormsModule
  ]
})
export class CartsModule { }
