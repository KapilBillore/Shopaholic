import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../masterview/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems : Product[] =[];
  totalPrice: Subject<number> = new Subject<number>();


  constructor() { }

  addToCart(product : Product){
    this.cartItems.push(product);
  }

  computeCartTotals()
  {
    let totalPriceValue: number = 0;

    for(let tempItem of this.cartItems)
    {
      totalPriceValue+=tempItem.unitPrice;
    }

    this.totalPrice.next(totalPriceValue);
  }

}
