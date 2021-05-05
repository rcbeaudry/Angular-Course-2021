import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

// Define an interface that holds a single method
export interface CanComponentDeactivate
{
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

// By making the interface above, and having our component (edit server) implement
// the interface, it will be passed in as the first parameetr, so the guard 
// will call into it (edit server).  This way we can use a guard, but still access local data
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate>
{
    canDeactivate(component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot,
                    currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean                    
    {
        return component.canDeactivate();
    }
}