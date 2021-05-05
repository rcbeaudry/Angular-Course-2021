import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit, OnDestroy
{
  sub : Subscription;
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit()
  {
    // subscribe to updates in the list
    this.sub = this.recipeService.recipesChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
      );
    // Get list of recipes from service
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy()
  {
    this.sub.unsubscribe();
  }
}
