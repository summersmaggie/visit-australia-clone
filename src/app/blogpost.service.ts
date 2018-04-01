import { Injectable } from '@angular/core';
import { blogPost } from './blog-post.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class BlogpostService {
  blogPosts: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.blogPosts = database.list('blogPosts');
  }

  getBlogPosts() {
    return this.blogPosts;
  }

  addBlogPost(newBlogPost: blogPost) {
    this.blogPosts.push(newBlogPost);
  }
  // getBlogPostById(blogPostId: number) {
  //   for (var i = 0; i < BLOGPOSTS.length - 1; i++) {
  //     if (BLOGPOSTS[i].id === blogPostId) {
  //       return BLOGPOSTS[i];
  //     }
  //   }
  // }
}
