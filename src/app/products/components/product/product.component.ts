import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Products } from '../../interface/products';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  constructor(private prodService: ProductService,private _TosterService:ToastrService) { }
  //Product
  products: Products[] = [];
  categories: string[] = [];
  termInput: string = "";
  cartProducts: any[] = []
  ngOnInit(): void {
    this.getProducts()
    this.getCategory()
  }
  getProducts() {
    this.prodService.getAllProduct().subscribe({
      next: (res) => {
        console.log(res);
        this.products = res
      },
      error: (err) => {
        console.log(err);
        this._TosterService.error(err?.message);
      }
    })
  }
  getCategory() {
    this.prodService.getAllCategory().subscribe({
      next: (res) => {
        this.categories = res
      },
      error: (error) => {
        this._TosterService.error(error?.message);

      }
    })
  }

  FilterCategory(event: any) {
    let value = event.target.value
    console.log(value);
    (value == 'all') ? this.getProducts() : this.getSpecificProduct(value)

  }
  getSpecificProduct(keyword: string) {
    this.prodService.getSpecifcProducts(keyword).subscribe({
      next: (res) => {
        console.log(res);
        this.products = res
      },
      error: (err) => {
        this._TosterService.error(err?.message);
      }
    })
  }
  addToCart(event: any) {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!)
      let exist = this.cartProducts.find(item => item.item.id == event.item.id)
      if (exist) {
        this._TosterService.error('Product Ia Already Exist In Cart', 'Major Error', {
          timeOut: 3000,
        
        });
      } else {
        this.cartProducts.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartProducts))
        this._TosterService.success("Product added to cart",'Success');
      }

    } else {
      this.cartProducts.push(event)
      localStorage.setItem('cart', JSON.stringify(this.cartProducts))
      this._TosterService.success("Product added to cart",'Success');
    }
  }
}
