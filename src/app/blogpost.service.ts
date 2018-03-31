import { Injectable } from '@angular/core';
import { blogPost } from './blog-post.model';
import { BLOGPOSTS } from './mock-blog-posts';

@Injectable()
export class BlogpostService {

  constructor() { }

  getBlogPosts() {
    return BLOGPOSTS;
  }

  getBlogPostById(blogPostId: number) {
    for (var i = 0; i < BLOGPOSTS.length - 1; i++) {
      if (BLOGPOSTS[i].id === blogPostId) {
        return BLOGPOSTS[i];
      }
    }
  }
}
