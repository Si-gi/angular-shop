import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model'
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart = {items:[{
    product: "https://via.placeholder.com/150",
    name: "courgette",
    price: 2,
    quantity: 3,
    id: 11
  }]}
  dataSource: Array<CartItem> = []
  displayColumns: Array<string> = ["product", "name", "price", "quantity", "total", "action"]

  constructor(private _cartService: CartService){

  }
  ngOnInit(): void{
    this.dataSource = this.cart.items;
    this._cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart
      this.dataSource = this.cart.items
    })
  }
  getTotal(items: Array<CartItem>): number {
    return this._cartService.getTotal(items)
  }

  onClearCart(): void {
    this._cartService.clearCart();
  }

  onRemoveFromCart(item: CartItem): void {
    this._cartService.removeFromCart(item)
  }

  onRemoveQuantity(item: CartItem): void {
    this._cartService.removeQuantity(item)

  }

  onAddQuantity(item: CartItem):void {
    this._cartService.addToCart(item)
  }
}
