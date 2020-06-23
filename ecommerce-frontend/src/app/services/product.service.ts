import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../common/product";
import {map} from "rxjs/operators";
import {ProductCategory} from "../common/product-category";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: string = "http://localhost:8080/api/products";

  private categoryUrl: string = "http://localhost:8080/api/product-categories";

  constructor(private HttpClient: HttpClient) { }


  getProductList(theCategoryId: number) : Observable<Product[]>{
    const searchUrl: string = this.baseUrl + "/search/findByCategoryId?id=" + theCategoryId;

    return this.HttpClient.get<GetResponseProduct>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
  }

  getProductCategories() : Observable<ProductCategory[]> {
    return this.HttpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.productCategory)
    );
  }
}
interface GetResponseProduct {
  _embedded: {
    products: Product[];
  }
}
  interface GetResponseProductCategory {
  _embedded: {
    productCategory: ProductCategory[];
  }

}
