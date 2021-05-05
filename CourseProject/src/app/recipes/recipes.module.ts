import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { SharedModule } from "../shared/shared.module";
import { EmptyItemComponent } from "./empty-item/empty-item.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeResolverService } from "./recipes-resolver.service";
import { RecipesComponent } from "./recipes.component";

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeDetailComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipeEditComponent
    ],
    // Anything your components use in a template you MUST import here even if app.module imports them.
    // Modules are standalone!
    // Only exception is Services
    imports: [
        // forChild() allows us to merge in the routing just for recipes
        RouterModule.forChild(
            [{ 
                // path empty for lazy loading ... see app-routing.module.ts
                path: '', component: RecipesComponent, canActivate: [AuthGuard],
                children: 
                [            
                    {path: '', component: EmptyItemComponent, pathMatch: 'full'}, 
                    {path: 'new', component: RecipeEditComponent},
                    // Resolver called before these are loaded
                    {path: ':id', component: RecipeDetailComponent, resolve: [RecipeResolverService]},
                    {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipeResolverService]}
                ]
            }]
        ),
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ]
})

export class RecipesModule {}
