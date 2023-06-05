import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>(); 
  sort = 'asc';
  itemsShowCount = 12;
  constructor() {}

  onSortUpdated(newSort: string): void
  {
    this.sort = newSort;
  }

  onItemsUpdated(count: number): void 
  {
    this.itemsShowCount = count;
  }

  onColumnUpdated(colsNumber: number): void
  {
    this.columnsCountChange.emit(colsNumber)
  }
}
