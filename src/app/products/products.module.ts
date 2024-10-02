import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { TextPipe } from './pipe/text.pipe';
import { SearchPipe } from './pipe/search.pipe';
import { FormsModule } from '@angular/forms';
import { OneProductComponent } from './components/one-product/one-product.component';
import { SelectComponent } from './components/select/select.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailsComponent,
    TextPipe,
    SearchPipe,
    OneProductComponent,
    SelectComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
    
  ]
})
export class ProductsModule { }
