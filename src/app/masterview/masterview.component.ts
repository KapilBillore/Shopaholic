import { Component, Input, OnInit } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-masterview',
  templateUrl: './masterview.component.html',
  styleUrls: ['./masterview.component.css']
})
export class MasterviewComponent implements OnInit {

  @Input() loadedfeature : any;

  constructor() { }

  ngOnInit(): void {
  }


}
