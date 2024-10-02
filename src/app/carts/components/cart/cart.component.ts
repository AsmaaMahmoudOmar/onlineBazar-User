import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(private cartSerivce: CartService,
    private _TosterService: ToastrService
  ) { }
  cartProducts: any[] = [];
  total: any = 0;
  done: boolean = true

  ngOnInit(): void {
    this.getCartProduct()
  }
  getCartProduct() {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!)
      console.log(this.cartProducts);
      this.totalPrice()

    }
  }
  // detect change in input
  detectChange() {
    localStorage.setItem('cart', JSON.stringify(this.cartProducts))
    this.totalPrice()
    this.done=true

  }

  plusAmount(index: any) {
    this.cartProducts[index].quantity++
    localStorage.setItem('cart', JSON.stringify(this.cartProducts))
    this.totalPrice()
    this.done=true;


  }
  minusAmount(index: any) {
    if (this.cartProducts[index].quantity > 0) {
      this.cartProducts[index].quantity--
      localStorage.setItem('cart', JSON.stringify(this.cartProducts))
      this.totalPrice();
      this.done=true
    }
    if (this.cartProducts[index].quantity == 0) {
      this.deletItem(index)
    }
  }
  totalPrice() {
    this.total = 0
    for (let i in this.cartProducts) {
      this.total += this.cartProducts[i].item.price * this.cartProducts[i].quantity
      let integerNumber = parseInt(this.total)
      this.total = integerNumber
    }

    localStorage.setItem('cart', JSON.stringify(this.cartProducts))

  }
  deletItem(index: any) {
    this.cartProducts.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(this.cartProducts))
    this.totalPrice()


  }
  clearCart() {
    this.cartProducts = [];
    localStorage.setItem('cart', JSON.stringify(this.cartProducts))
    this.totalPrice()

  }

  checkOrder() {
    let products = this.cartProducts.map((item) => {
      return { productId: item.item.id, quantity: item.quantity }
    })
    let Model = {
      userId: 3,
      date: new Date(),
      products: products
    }
    this.cartSerivce.orderCart(Model).subscribe({
      next: (res) => {
        this._TosterService.success("order Done ", 'Success');
        this.done = false
      },
      error: (err) => {
        this._TosterService.error(err.message, 'Major Error', {
          timeOut: 3000,

        });
      }
    })
  }

}
