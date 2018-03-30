import { Component, Input, Output, EventEmitter } from '@angular/core';
import { blogPost } from '../blog-post.model';

@Component({
  selector: 'app-blog-post-preview',
  templateUrl: './blog-post-preview.component.html',
  styleUrls: ['./blog-post-preview.component.css']
})

export class BlogPostPreviewComponent {
  @Input() childBlogPostList: blogPost[];
  @Input() childSelectedBlog: blogPost;
  @Output() clickSender = new EventEmitter();

  editButtonClicked(blogPostToEdit: blogPost) {
    this.clickSender.emit(blogPostToEdit);
  }

}
