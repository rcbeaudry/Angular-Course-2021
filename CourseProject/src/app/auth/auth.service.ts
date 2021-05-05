import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, tap } from "rxjs/operators";
import { BehaviorSubject, throwError } from 'rxjs';
import { User } from "./user.model";
import { Router } from "@angular/router";

export interface AuthResponseData {
    idToken: string,
    email: string,
    refreshToken: string, 
    expiresIn: string,
    localId: string
    registered?: boolean
}

@Injectable({providedIn: 'root'})
export class AuthService {

    user = new BehaviorSubject<User>(null);
    private tokenTimer: any;

    constructor(private http:HttpClient, private router:Router) {}

    signUp(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC07BUJNyDObvci3mwimYm0zOGTjAUGZgQ',
            { 
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(catchError(this.handleError), tap(resData => {
            this.handleAuth(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        }));
    }

    login(email:string, password: string) {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC07BUJNyDObvci3mwimYm0zOGTjAUGZgQ',
            { 
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(catchError(this.handleError), tap(resData => {
            this.handleAuth(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        }));
    }

    autoLogin() {
        // Grab data from local storage
        const userData: {
           email: string,
           id: string, 
           _token: string,
           _tokenExpirationDate: string
        } = JSON.parse(localStorage.getItem('userData'));
        
        // if nothing there, exit
        if (!userData) {return;}
        
        // Create user object from data
        const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));

        // Validate token OK -- if so. emit this as our user
        if (loadedUser.token)
        {
            this.user.next(loadedUser);
            const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
            this.autoLogout(expirationDuration);
        }
    }

    logout() {
        this.user.next(null);
        this.router.navigate(['/auth']);
        localStorage.removeItem('userData');
        if (this.tokenTimer) {
            clearTimeout(this.tokenTimer);
        }
        this.tokenTimer = null;
    }

    autoLogout(expirationDuration: number) {
        this.tokenTimer = setTimeout(() => {
            this.logout();
        }, expirationDuration);
    }

    private handleAuth(email: string, userID: string, token: string, expiry:number) {
        const expDate = new Date(new Date().getTime() + expiry*1000);
        const user = new User(email, userID, token, expDate);
        this.user.next(user);
        this.autoLogout(expiry * 1000);
        localStorage.setItem('userData', JSON.stringify(user));
    }

    private handleError(errorRes: HttpErrorResponse) {
        let errorMessage = "Error";
        if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = "Email Already Exists!!";
                break;
            case "EMAIL_NOT_FOUND":
                errorMessage = "Email Does Not Exist!!";
                break;     
            case "INVALID_PASSWORD":
                errorMessage = "Wrong Password Moron!!";
                break;            
        }
        return throwError(errorMessage);
    }
}