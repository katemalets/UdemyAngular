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

  getProductListPaginate(page: number, pageSize: number, theCategoryId: number) : Observable<GetResponseProduct>{

    const searchUrl: string = this.baseUrl + "/search/findByCategoryId?id=" + theCategoryId +
      + "?page=" + page + "&size" + pageSize;

    return this.HttpClient.get<GetResponseProduct>(searchUrl);
  }

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

  searchProducts(keyword: string): Observable<Product[]>  {
    const searchUrl: string = this.baseUrl + "/search/findByNameContaining?name=" + keyword;
    return this.HttpClient.get<GetResponseProduct>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
  }

  getProduct(productId: number) : Observable<Product> {
    const productUrl: string = this.baseUrl + "/" + productId;
    return this.HttpClient.get<Product>(productUrl);
  }
}
interface GetResponseProduct {
  _embedded: {
    products: Product[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}
  interface GetResponseProductCategory {
  _embedded: {
    productCategory: ProductCategory[];
  }

}
