import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppinglist.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy 
{
  ingredients: Ingredient[];
  private ingSub: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit()
  {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingSub = this.shoppingListService.IngredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {this.ingredients = ingredients;}
    );
  }

  ngOnDestroy()
  {
    this.ingSub.unsubscribe();
  }

  onEditItem(i: number)
  {
    this.shoppingListService.StartedEditing.next(i);
  }
}
