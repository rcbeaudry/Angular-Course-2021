
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shoppinglist.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService
{
    recipesChanged = new Subject<Recipe[]>();

    constructor(private slService: ShoppingListService)
    {

    }

    private recipes: Recipe[] = [];
    //     new Recipe
    //     (
    //         'A Test Recipe',
    //         'A Test', 
    //         'https://images.freeimages.com/images/large-previews/3db/peppers-1542640.jpg',
    //         [
    //             new Ingredient('APeppers', 1),
    //             new Ingredient('AOnions', 2)
    //         ]
    //      ),
    //     new Recipe
    //     (
    //         'B Test Recipe', 
    //         'B Test', 
    //         'https://images.freeimages.com/images/large-previews/3db/peppers-1542640.jpg',
    //         [
    //             new Ingredient('BPeppers', 1),
    //             new Ingredient('BOnions', 2)
    //         ]
    //     ),
    //     new Recipe
    //     (
    //         'C Test Recipe', 
    //         'C Test', 
    //         'https://images.freeimages.com/images/large-previews/3db/peppers-1542640.jpg',
    //         [
    //             new Ingredient('CPeppers', 1),
    //             new Ingredient('COnions', 2)
    //         ]
    //     )
    //   ];

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes()
    {
        // returning .slice() makes a COPY of the array, so no way to change the original from outside
        // returning this.recipes would have returned a REFERENCE, so original could have been changed, even though private
        return this.recipes.slice();
    }

    getRecipe(id: number)
    {
        return this.recipes[id];
    }

    sendToShoppingList(ingredients: Ingredient[])
    {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe)
    {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe)
    {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number)
    {
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
    }
}