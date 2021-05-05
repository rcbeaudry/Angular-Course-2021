import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  detailRecipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit()
  {
    // We can click on other recipes, so that means reloading from within this component, so 
    // subscribe is better than static update
    this.route.params
      .subscribe
      (
        (params: Params) => 
        { 
          // Get the id, and call service for recipe details to show
          this.id = +params['id']; 
          this.detailRecipe = this.recipeService.getRecipe(this.id);
        }
      );
  }

  sendToShopping()
  {
    this.recipeService.sendToShoppingList(this.detailRecipe.ingredients);
  }

  onDeleteRecipe()
  {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
