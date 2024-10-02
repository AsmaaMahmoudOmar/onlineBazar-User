import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.scss']
})
export class OneProductComponent {
@Input() data :any ={};

@Output() btn=new EventEmitter();
addBtn:boolean = false
amount:number = 0

add(){
this.btn.emit({item:this.data,quantity:this.amount})
}

}
