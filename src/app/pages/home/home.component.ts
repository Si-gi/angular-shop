import { Component } from '@angular/core';

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  category: string | undefined;
  cols = 3;

  onColumnsChange(colsNb: number): void {
    this.cols = colsNb;
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory
  }
}
