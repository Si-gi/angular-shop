import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model'
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
  ngOnInit(): void{
    this.dataSource = this.cart.items;
  }
  getTotal(items: Array<CartItem>): number {

    return items.map((item) => item.price * item.quantity)
    .reduce((previous, current) => previous + current, 0)
  }
}
