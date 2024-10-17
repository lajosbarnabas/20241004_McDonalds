import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product!:ProductModel;
  @Output() quantityChange = new EventEmitter();

  increase(){
    this.product.quantity++;
    this.quantityChange.emit();
  }

  decrease(){
    if(this.product.quantity > 1){
      this.product.quantity--;
      this.quantityChange.emit();
    }
  }
}


