import { Injectable } from '@angular/core';
import { blogPost } from './blog-post.model';
import { BLOGPOSTS } from './mock-blog-posts';

@Injectable()
export class BlogpostService {

  constructor() { }

  getBlogPosts() {
    return BLOGPOSTS;
  }

}
