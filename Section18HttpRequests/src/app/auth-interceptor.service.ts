import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { CompileShallowModuleMetadata } from "@angular/compiler";
import { tap } from "rxjs/operators";

export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // Can use req object to decide if we want to intercept for certain URLs, etc.
        // console.log('Request on the way');
        
        // Can also modify request, but req object is immutable ... get around with clone
        const modReq = req.clone({headers: req.headers.append('Auth', 'xyz')});

        // Must return next.handle() to make the request go out, and return results 
        // Forwards the modified request .... Could also have an if to decide if you want to 
        // modify, so could send either original req, or modReq

        // Handle is an observable, so you can use operators, and intercept the response
        // Commented out here, because we later added the loging interceptor
        return next.handle(modReq)//.pipe(tap(event => {
            //console.log(event)
            //if (event.type === HttpEventType.Response){
            //    console.log('Response body:');
            //    console.log(event.body);
            //}
        //}))
        ;
    }
}