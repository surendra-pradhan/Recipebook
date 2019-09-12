import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes.models';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipes[] = [
    new Recipes('recipes1', 'this is a new taste', 'https://media.defense.gov/2015/Nov/16/2001318253/-1/-1/0/151123-A-YG824-001.JPG')
  ];
  constructor() { }

  ngOnInit() {
  }

}
