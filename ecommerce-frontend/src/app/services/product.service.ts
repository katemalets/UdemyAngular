import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../common/product";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: string = "http://localhost:8080/api/products";

  constructor(private HttpClient: HttpClient) { }


  getProductList(theCategoryId: number) : Observable<Product[]>{
    const searchUrl: string = this.baseUrl + "/search/findByCategoryId?id=" + theCategoryId;

    return this.HttpClient.get<GetResponse>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
  }
}
interface GetResponse {
  _embedded: {
    products: Product[];
  }

}
