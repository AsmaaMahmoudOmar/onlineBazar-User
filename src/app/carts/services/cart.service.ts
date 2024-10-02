import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) { }

  orderCart(dataaModel:any):Observable<any>{
    return this._HttpClient.post(Environment.baseUrl+'carts',{dataaModel})
  }
}
