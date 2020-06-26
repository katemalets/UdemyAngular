import { Injectable } from '@angular/core';
import {CartItem} from "../common/cart-item";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];

  totalPrice = Subject<number> = new Subject<number>();

  totalQuantity = Subject<number> = new Subject<number>();

  constructor() {
  }

  addToCart(cartItem: CartItem){

    let alreadyExistsInCart: boolean = false;
    let existingCartItem: CartItem = undefined;

    if(this.cartItems.length > 0){
      for(let tempCartItem of this.cartItems){
        if(tempCartItem.id === cartItem.id){
          existingCartItem = tempCartItem;
          break;
        }
      }
    }
    alreadyExistsInCart = (existingCartItem != undefined);
    if(alreadyExistsInCart){
      existingCartItem.quantity++;
    }
    else {
      this.cartItems.push(existingCartItem);
    }
    this.computeCartTotals();
  }

  computeCartTotals() {

    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for(let currentCartItem of this.cartItems){
      totalPriceValue += currentCartItem.quantity * currentCartItem.unitPrice;
      totalQuantityValue += currentCartItem.quantity;
    }
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

    this.logCartData(totalPriceValue, totalQuantityValue){
      console.log("\nContents of the cart");
      for(let tempItem of this.cartItems){
        const subTotalPrice = tempItem.quantity * tempItem.unitPrice;
        console.log("Name: " + tempItem.name + "Price" + tempItem.unitPrice +
        "Quantity" + tempItem.quantity + "SubPrice: " + subTotalPrice);
      }
        console.log("totalPrice: " + totalPriceValue.toFixed(2) +
        "totalQuantity: " + totalQuantityValue);
      console.log("============\n")
    }
  }
}
