import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Product[]=[
    new Product("First test Product","Descriotion of the product",50,
    "https://source.unsplash.com/user/erondu/120x90"),
    new Product("Second test Product","Descriotion of the product",60,
    "https://source.unsplash.com/user/erondu/120x90"),
    new Product("Third test Product","Descriotion of the product",10,
    "https://source.unsplash.com/user/erondu/120x90"),
    new Product("Fourth test Product","Descriotion of the product",20,
    "https://source.unsplash.com/user/erondu/120x90"),
    new Product("Fifth test Product","Descriotion of the product",40,
    "https://source.unsplash.com/user/erondu/120x90"),
    new Product("Sixth test Product","Descriotion of the product",30,
    "https://source.unsplash.com/user/erondu/120x90")
  ];

  //@Output() selectedProductfromList = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }



}
