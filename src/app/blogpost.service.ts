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
  getBlogPostById(blogPostId: number) {
    return this.database.object('/blogPosts/' + blogPostId);
  }

  updateBlogPost(localUpdatedBlogPost) {
    let blogPostEntryInFirebase = this.getBlogPostById(localUpdatedBlogPost.$key);
    blogPostEntryInFirebase.update({title: localUpdatedBlogPost.title, author: localUpdatedBlogPost.author, preview: localUpdatedBlogPost.preview, content: localUpdatedBlogPost.content, tags: localUpdatedBlogPost.tags, image: localUpdatedBlogPost.image});
  }
}
