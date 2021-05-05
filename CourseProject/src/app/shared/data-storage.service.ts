import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {

    constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {}

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        // Firebase 'put' allows overwriting all data with one operation.  Other APIs may not work 
        // this way, so be careful, and make sure you can do what you think with your API.
        // "recipes" added to end so Firebase makes a folder with this data, and ".json" is a
        // Firebase convention to have at the end
        // Could also just return, and have the calling component subscribe
        this.http.put('https://ng-course-recipe-book-f0d03-default-rtdb.firebaseio.com/recipes.json', recipes)
        .subscribe(
            response => {
                console.log(response);
            }
        )
    }

    fetchRecipes() {
        // don't subscribe here, let caller subscribe
        // use "tap" to set the recipes without having to subscribe here
        return this.http.get<Recipe[]>('https://ng-course-recipe-book-f0d03-default-rtdb.firebaseio.com/recipes.json')
        .pipe(
            map(recipes => {
                // This map is a javascript array operation, not the rxjs map
                // Takes an anonymous function, and applies it to each object in the array
                return recipes.map(recipe => {
                    // spread operator to copy fields, then set ingredients to itself if exists, or to empy array if not exists
                    return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []}
                });
            }),
            tap(recipes => {
                this.recipeService.setRecipes(recipes);
            })
        );
    }
}