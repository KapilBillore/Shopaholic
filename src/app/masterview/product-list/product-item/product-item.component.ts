import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product : Product;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart(product: Product)
  {
    this.cartService.addToCart(product);
  }
}
