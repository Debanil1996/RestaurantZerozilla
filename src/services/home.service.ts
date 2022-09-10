import { Product } from './../models/home.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {environment} from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  apiUrl:string;
  cartCount = new BehaviorSubject(null);
  carts=[];
  constructor(private http:HttpClient) {
     this.apiUrl=environment.globalurl;
     this.carts=[];
   }

   incrementCartCount(product:Product){
    this.carts.push(product);
    this.cartCount.next(this.carts?.length);
   }
   getAllCategories():Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/products/categories`);
   }
   getAllProducts(category:string):Observable<Product[]>{
    return this.http.get<Product[]>(`${this.apiUrl}/products/category/${category}`);
   }


}
