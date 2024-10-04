import { Component, Input } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product!:ProductModel;

  increase(){
    this.product.quantity++;
  }

  decrease(){
    this.product.quantity--;
  }
}


