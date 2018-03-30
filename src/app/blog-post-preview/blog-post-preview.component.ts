import { Component, Input, OnInit } from '@angular/core';
import { blogPost } from '../blog-post.model';


@Component({
  selector: 'app-blog-post-preview',
  templateUrl: './blog-post-preview.component.html',
  styleUrls: ['./blog-post-preview.component.css']
})

export class BlogPostPreviewComponent implements OnInit {
  @Input() childBlogPostList: blogPost[];

  console.log(blogPost);

  constructor() { }

  ngOnInit() {
  }

}
