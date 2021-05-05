import { Component } from "@angular/core";
import { NgForm, SelectMultipleControlValueAccessor } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthResponseData, AuthService } from "./auth.service";

@Component({selector: 'app-auth', templateUrl: './auth.component.html'})
export class AuthComponent {
    isLoginMode = false;
    isLoading = false;
    error:string = null;

    constructor (private authService: AuthService, private router:Router) {}

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onHandleError() {
        this.error = null;
    }
    
    onSubmit(form : NgForm) {
        this.isLoading = true;
        if (!form.valid) {
            return;
        } else {
            const email = form.value.email;
            const password = form.value.password;   
            
            let authObs: Observable<AuthResponseData>;
            
            if (this.isLoginMode) {
                authObs = this.authService.login(email, password);
            } else {
                authObs = this.authService.signUp(email, password);
            }

            authObs.subscribe( resData => {
                console.log(resData);
                this.router.navigate(['./recipes']);
            },
            errorMessage=> {
                console.log(errorMessage);
                this.error = errorMessage;
            })

            form.reset();
        }        
        this.isLoading = false;
    }
}