import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts = [];
  isFetching = false;
  error = null;
  private errorSub: Subscription;

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    
    // This subscription is for a Subject when we do not subscribe to the 
    // observable (ex., create post). The Subject will pass errors to us.
    this.errorSub = this.postsService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });

    this.isFetching = true
    // Since component is subscribing to the observable, it can catch the error here.
    this.postsService.fetchPosts().subscribe(posts =>{
      this.isFetching = false;
      this.loadedPosts = posts;
      }, error => {
        this.isFetching = false;
        this.error = error.message;
    });
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }

  onCreatePost(postData: Post) {
    this.postsService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    this.isFetching = true
    // Since component is subscribing to the observable, it can catch the error here.
    this.postsService.fetchPosts().subscribe(posts =>{
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {
      this.isFetching = false;
      this.error = error.message;
    });
  }

  onClearPosts() {
    // Send Http request
    this.postsService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  onHandleError() {
    // Clear message so it goes away from UI.
    this.error = null;
  }
}
