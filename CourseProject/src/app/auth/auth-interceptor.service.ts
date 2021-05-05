import { HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaustMap, take } from "rxjs/operators";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{

    constructor(private authService: AuthService) {}
    
    intercept(req: HttpRequest<any>, next:HttpHandler) {
        // take(1) means only take one time from subscribe, and automagically unsubscribe
        // this whole thing is pretty screwed up, and weird ... I guess exhaustMap replaces some 
        // observable in the chain, and it all automagically just works ... there must be a clearer way!
        // all this just to get the damn token
        return this.authService.user.pipe(
            take(1),
            exhaustMap(user=> {
                if (!user) {return next.handle(req);}
                const modReq = req.clone({
                    params: new HttpParams().set('auth', user.token)
                });
                return next.handle(modReq);
            })
        )        
    }
}