import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../../interface/products';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  constructor
    (
      private _ActivatedRoute: ActivatedRoute,
      private _ProductService: ProductService,
      private _Toaster: ToastrService,
      private title :Title

    ) {}
  ProductID: any = 0
  ProductDetials: any = {}
  ngOnInit() {
    this.getIdProduct();
    this.getProductDetails()
  }

  getIdProduct() {
    this._ActivatedRoute.paramMap.subscribe({
      next: (param) => {
        console.log(param);
        this.ProductID = param.get('id')

      }
    })
  }
  getProductDetails() {
    this._ProductService.getSingleProduct(this.ProductID).subscribe({
      next: (res) => {
        console.log(res);
        this.ProductDetials = res
        this.title.setTitle( "Product Details|"+ this.ProductDetials.title)

      },
      error: (err) => {
        this._Toaster.error(err.message)
      }
    })
  }
}
