import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild
{
    constructor (private authService: AuthService, 
                 private router: Router)
    {}

    // can return Observable<boolean> or Promise<boolean> or boolean
    // Interesting syntax
    // Promise???? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises - yuck!
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
    {
        // Check out auth service, if user authenticated, allow navigation, else navigate away to /
        return this.authService.isAuthenticated().then
            (
                (authenticated: boolean) => 
                {
                    if (authenticated)
                    {
                        return true;
                    }
                    else
                    {
                        this.router.navigate(['/']);                    
                    }
                }
            );
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
    {
        // Want same logic as canActivate, so just call it here...
        return this.canActivate(route, state);
    }
}