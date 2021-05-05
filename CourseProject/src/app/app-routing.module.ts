import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const appRoutes: Routes =
[
    { path: '', redirectTo: '/recipes', pathMatch: 'full'},
    // Lazy loading ... only loads when recipes route is hit
    // Remove recipesModule from imports in app.module.ts so we don't double-load
    { path: 'recipes', loadChildren: () => import('./recipes/recipes.module').then(m=>m.RecipesModule)}
];

@NgModule
({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    // Every module works on its own, so we need to export for others to see
    exports: [RouterModule]
})
export class AppRoutingModule
{

}