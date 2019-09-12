import { Component, OnInit } from '@angular/core';
import { Ingrdiants } from './shopping-edit/ingrdiant.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingrediants: Ingrdiants[] = [
  {name: 'Apple', amount: 10},
  {name: 'Tomato', amount: 5}
];
  constructor() { }

  ngOnInit() {
  }

}
