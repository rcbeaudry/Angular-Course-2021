import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { RouterModule } from '@angular/router';
import { AuthGuard } from "./auth-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";

import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerResolver } from "./servers/server/server-resolver.service";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

/* Moved this into a separate module to have routing handled here, makes it a bit cleaner in app.module.ts */

/*
  In our example, we didn't encounter any issues when we tried to redirect the user. 
  But that's not always the case when adding redirections.

  By default, Angular matches paths by prefix. That means, that the following route 
  will match both /recipes  and just / 

  { path: '', redirectTo: '/somewhere-else' } 

  Actually, Angular will give you an error here, because that's a common gotcha: 
  This route will now ALWAYS redirect you! Why?

  Since the default matching strategy is "prefix" , Angular checks if the path you entered 
  in the URL does start with the path specified in the route. Of course every path starts with ''
  (Important: That's no whitespace, it's simply "nothing").

  To fix this behavior, you need to change the matching strategy to "full" :

  { path: '', redirectTo: '/somewhere-else', pathMatch: 'full' } 

  Now, you only get redirected, if the full path is ''  (so only if you got NO other content 
  in your path in this example).
*/

// canActivateChild is a guard for all children of the route.  
// canActivate is a guard for the route and all children
// canDeactivate is a guard for leaving a route
// resolve is a guard to gather some data before component is rendered
// ":id" and ":name" are parameters to the route
// "**" should always be last as it is a catch-all if nothing ahead of it matches

const appRoutes: Routes=
[
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent,
    children: [
      { path: ':id/:name', component: UserComponent }
    ] },
  
  { path: 'servers', canActivateChild: [AuthGuard], component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
    ] },
  
//  {path: 'not-found', component: PageNotFoundComponent},
    {path: 'not-found', component: ErrorPageComponent, data: {message: 'There was an error in the page!'}},
  {path: '**', redirectTo: 'not-found'}

];

@NgModule
({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule
{

}