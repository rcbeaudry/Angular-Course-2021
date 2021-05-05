import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  // recipeItem and index come from recipe-list component by way of property binding
  @Input() recipeItem: Recipe;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
