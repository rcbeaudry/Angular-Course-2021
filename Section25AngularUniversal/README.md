
# Notes

- Angular Universal is a way to have some code pre-render on the server. Doesn't seem to be to important or well-used.
- The lectures dealt with a lot of older code, and setup that I will not likely run into
    Important: As mentioned in the previous vides, the next lectures are a bit older. There, we set up the entire process manually (you had to do that in the past) and since that might be interesting, I decided to keep those lectures around.

    You find no code attached anymore since these lectures build up on old course content which was removed. You can't code along therefore but you can see the steps the ng add command basically applies.
- Videos watched, but code from instructor's example
- Requires Node.js on the server to pre-render, so can no longer host on a static web host
- From lecture: 
    Hence you need a host that does - for example AWS ElasticBeanstalk or Heroku.

    To these hosts, you need to upload your dist/ folder along with the package.json file. On the web server, you then have to ensure that npm install is executed, followed by npm serve:ssr.

    That's it - your app is now up and running on a web server!

    Here's an example how you could host Universal apps via Firebase Cloud Functions (NOT Firebase Hosting): https://www.udemy.com/the-complete-guide-to-angular-2/learn/lecture/15267340#questions/7482486

- Note from lecture -- Gotcha
    You typically use Angular Universal to pre-render Angular pages on the server. Once the app then runs on the client, it's a normal SPA again.

    Server-side rendering (SSR) can make sense because of SEO considerations (crawler should see what your users see) or because you want to deliver a finished page to your users (rather than creating the page in the browser).

    But that also has one important implication: You MUST NOT use any browser-only APIs like document.querySelector()  in your Angular code! 

    Simply because it will execute on the server and there, such APIs are not available.

    That's why, in this course, I recommended to use Angular features only: These features are safe to use because Angular will check if a certain API can be used before it uses it.

