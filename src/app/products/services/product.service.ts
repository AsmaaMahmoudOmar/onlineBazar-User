import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private HttpClient:HttpClient) { }
  getAllProduct():Observable<any>{
   return this.HttpClient.get(Environment.baseUrl+'products')
  }
  getAllCategory():Observable<any>{
    return this.HttpClient.get(Environment.baseUrl+'products/categories')
  }
  getSpecifcProducts(category:string):Observable<any>{
    return this.HttpClient.get(Environment.baseUrl+`products/category/`+ category)
  }
  getSingleProduct(id:number):Observable<any>{
    return this.HttpClient.get(Environment.baseUrl+`products/${id}`)

  }
}
