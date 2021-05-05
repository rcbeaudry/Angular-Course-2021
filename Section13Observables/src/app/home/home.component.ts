import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private obsSub: Subscription;

  constructor() { }

  ngOnInit() 
  {
/*     
    this.obsSub = interval(1000).subscribe
    (
      count => 
      {
        console.log(count);
      }
    ); 
*/

      // "Real" Observable now -- not really, just a re-implemtnation of above, 
      // but not using built-in interval -- instead using Observabel class and standard JS/TS
      const intObs = Observable.create
      (
        observer =>
        {
          // Need to tell the observer what is going on
          let count = 0;
          setInterval
          (
            // First param is function to call
            ()=> { 
              observer.next(count); 
              // Fake complete -- we won't get to error, but leave it there for example
              // Will not hurt to unsub after completion, so keep the unsub in case we never complete
              if (count === 2)
              {
                observer.complete();
              }
              // Fake throw error .. will also stop the observer, so no more events will fire
              // Will not hurt to unsub after an error, so keep the unsub code to handle error
              // or clean exit... observer does NOT fire complete after error.... only error 
              // handler is called
              if (count > 3)
              {
                observer.error(new Error('Count is more than 3!'));                
              }
              count++; 
            }
            // Second param is interval
            , 1000
          );
        }
      );

      // Can also use filters to massage data before it gets to our subscritpion.
      // ex., map, filter, etc....  see rxjs docs
      // ex: this.obsSub = intObs.pipe( map (data:number)=>{return 'Round:'+(data+1);})).subscribe.....
      // more than one: this.obsSub = intObs.pipe(map (.....), filter(......)).subscribe.....
      this.obsSub = intObs.subscribe
      ( 
        // First function is for normal data handling
        // Second function is for error handling
        // Third is for completion
        data => 
        { 
          console.log(data); 
        },
        error =>
        {
          alert(error.message);
        },
        () =>
        {
          alert('Completed!');
        }
      );
  }

  ngOnDestroy()
  {
    // Since this is our Observable, not managed by Angular, we must take care of unsub in OnDestroy
    this.obsSub.unsubscribe();
  }

}
