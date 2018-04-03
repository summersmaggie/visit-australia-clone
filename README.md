# _Visit Australia_

##### Epicodus - JavaScript Week 3 & 4 - Code Review - 03/30/2018, 04/06/2018

## _By Maggie Summers_

## Description

A clone of the website Australia.com, built with Angular.

<kbd><img src="src/img/australia-clone.png"></img></kbd>

## Features

* As a user, I am welcomed to the website with a homepage page and a navigation bar.  
* As a user, I can view blog posts on the homepage, broken out by Experiences for the first-time traveler, Popular places, Featured offers, and Traveler essentials.
* As a user, each blog post has an individual page with a title, author, image and longer story.  
* As an employee, I want to add new blog posts, update current blog posts, and delete existing blog posts.


## Technologies Used

```
Application: Angular CLI, TypeScript, Bootstrap, HTML
Environment: ng, npm, webpack, tslint
Database: Firebase
```

## Installation

```
$ git clone https://github.com/summersmaggie/visit-australia
```

_Requires node.js; instructions to install:_ https://www.learnhowtoprogram.com/javascript/getting-started-with-javascript-2f9a73dc-b7f5-4a22-9101-e69d49f552ac/installing-node-js

Install required npm packages and dependencies:

```
$ npm install
```

_Requires AngularFire; instructions to install and add credentials:_
https://www.learnhowtoprogram.com/javascript/angular-extended/firebase-introduction-and-setup


Once AngularFire is installed, place Firebase credentials in an ```api.keys.ts``` file in the ```src/app``` directory. The file will need to look like this:

```
export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };
```

Once credentials are updated and ignored in your .gitignore file, navigate to `http://localhost:4200/` for a dev server:

```
$ ng serve
```

## Known Bugs

 _No known bugs at this time._

## Support and contact details

 _To suggest changes, submit a pull request in the GitHub repository._

## License

 _Licensed under MIT license_

Copyright 2018 **Maggie Summers**
