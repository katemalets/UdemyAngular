import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../common/product";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../../services/cart.service";
import {CartItem} from "../../common/cart-item";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  currentCategoryId: number = 1;
  previousCategoryId: number = 1;
  currentCategoryName : string;
  searchMode: boolean = false;

  pageNumber: number = 1;
  pageSize: number = 8;
  totalElements: number = 0;

  previousKeyword: string = null;


  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() =>
    {
      this.listProducts()
    });
  }

  listProducts(){
    this.searchMode = this.route.snapshot.paramMap.has("keyword");
    if(this.searchMode){
      this.handleSearchProducts();
    } else {
      this.handleListProducts();
    }
  }

  handleListProducts(){
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');
    if(hasCategoryId){
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
      this.currentCategoryName = this.route.snapshot.paramMap.get('name');
    } else {
      this.currentCategoryId = 1;
      this.currentCategoryName = 'Book';
    }

    if(this.previousCategoryId != this.currentCategoryId){
      this.pageNumber = 1;
    }
    this.previousCategoryId = this.currentCategoryId;
    console.log("Previous: " + this.previousCategoryId + "\nCurrent: " + this.currentCategoryId);

    this.productService.getProductListPaginate(this.pageNumber - 1, this.pageSize, this.currentCategoryId)
      .subscribe(this.processResult());
  }

  handleSearchProducts() {

    const keyword: string = this.route.snapshot.paramMap.get("keyword");
    if(this.previousKeyword != keyword){
      this.pageNumber = 1;
    }
    this.previousKeyword = keyword;
    console.log("Previous: " + this.previousKeyword + "\nCurrent: " + keyword);
    this.productService.searchProductPaginate(this.pageNumber -1,
      this.pageSize, keyword).subscribe(this.processResult());
  }

  processResult() {
    return data =>{
      this.products = data._embedded.products;
      this.pageNumber = data.page.number + 1;
      this.pageSize = data.page.size;
      this.totalElements = data.page.totalElements;
    }
  }

  updatePageSize(pageSize: number) {
    this.pageSize = pageSize;
    this.pageNumber = 1;
    this.listProducts();
  }

  addToCart(product: Product){
    console.log("Name: " + product.name + "Price: " + product.unitPrice);
    const cartItem = new CartItem(product);
    this.cartService.addToCart(cartItem);

  }
}
