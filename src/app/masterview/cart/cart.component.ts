import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  //@Input() userSelectedProduct :Product;
  cartItems : Product[];
  totalPrice: number = 0;


  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.listCartItems();
  }

  listCartItems()
  {
    this.cartItems=this.cartService.cartItems;

    this.cartService.totalPrice.subscribe(
      data => {
        this.totalPrice=data;
      }
    );

    this.cartService.computeCartTotals();

  }

}
