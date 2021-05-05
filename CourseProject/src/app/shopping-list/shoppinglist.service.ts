import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService
{
    IngredientsChanged = new Subject<Ingredient[]>();
    StartedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];

    getIngredients()
    {
        return this.ingredients.slice();
    }

    getIngredient(index:number)
    {
        return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient)
    {
        this.ingredients.push(ingredient);
        this.IngredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[])
    {
        // ... is "spread" operator -- turns array into list of individual items
        this.ingredients.push(...ingredients);
        this.IngredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(index: number, newIng: Ingredient)
    {
        this.ingredients[index]=newIng;
        this.IngredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number)
    {
        this.ingredients.splice(index,1);
        this.IngredientsChanged.next(this.ingredients.slice());
    }
}