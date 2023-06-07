import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model'

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent {
  @Input() fullwithMode = false;
  
  product : Product | undefined = {
    id: 0,
    title: 'courgette',
    price: 2,
    category: 'legumes',
    description: 'courgette verte',
    image: 'https://via.placeholder.com/150;',
  };

  @Output() addToCart = new EventEmitter()
  constructor () {}

  onAddToCart(): void{
    this.addToCart.emit(this.product);
  }
}
