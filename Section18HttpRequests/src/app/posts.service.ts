import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";
import { Post } from "./post.model";

@Injectable({providedIn: 'root'})
export class PostsService{
    error = new Subject<string>();

    constructor(private http: HttpClient){}

    createAndStorePost(title: string, content: string){
        const postData: Post = {title: title, content: content};

        // For us, component doesn't care about the result, so subscribe here
        // So that request sent
        // Observable provided by Angular, so no need to unsub
        this.http
            .post<{ name: string }>(
                'https://ng-complete-guide-4bdc9-default-rtdb.firebaseio.com/posts.json', 
                postData,
                {
                    observe: 'response'
                }
                ).subscribe(responseData => {
                    console.log(responseData);
                }, error => {
                    // Example of usimg a Subject to send error because component did not
                    // subscribe to the observable, so it would not see the error there.
                    this.error.next(error.message);
            });
    }

    fetchPosts(){

        // For us, component cares about result, so it will subscribe.  We just return
        // the observable.
        // Again, no need to unsub here as observable provided by Angular
        return this.http
            .get<{ [key:string]:Post }>('https://ng-complete-guide-4bdc9-default-rtdb.firebaseio.com/posts.json',
            {
                // Example of custom header
                headers: new HttpHeaders({CustomHeader: 'hello'}),
                // Example of parameters (could also do ? at end of URL) -- depends on what API supports
                params: new HttpParams().set('print', 'pretty')
            }
            )
            .pipe(
                map(responseData => {
                const postsArray:Post[] = [];
                for (const key in responseData) {
                    if (responseData.hasOwnProperty(key)) {
                    postsArray.push({ ...responseData[key], id:key })
                    }
                }
                return postsArray;
                }),
                catchError(errorRes => {
                    // Could do some behind the scenes stuff, send to analytics, etc.
                    // Need to throw so error makes it to subscriber
                    return throwError(errorRes);
                })
            );
    }

    deletePosts() {
        // Example of observing different responses using events
        // Example of changing the response type coming back
        return this.http.delete('https://ng-complete-guide-4bdc9-default-rtdb.firebaseio.com/posts.json',
            {
                observe: 'events',
                responseType: 'text'
            }
            // tap allows to inspect response without changing it
            ).pipe(tap(event=> {
                if (event.type === HttpEventType.Response) {
                    console.log(event);
                }
            }));
    }
}