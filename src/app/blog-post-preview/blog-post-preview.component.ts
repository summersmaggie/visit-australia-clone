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

// import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// import { blogPost } from '../blog-post.model';
// import { BlogpostService } from '../blogpost.service';
// import { Router } from '@angular/router';
//
// @Component({
//   selector: 'app-blog-post-preview',
//   templateUrl: './blog-post-preview.component.html',
//   styleUrls: ['./blog-post-preview.component.css'],
//   providers: [BlogpostService]
// })
//
// export class BlogPostPreviewComponent implements OnInit {
//   @Output() clickSender = new EventEmitter();
//   blogPosts: blogPost[];
//
//   constructor(private router: Router, private blogpostService: BlogpostService) {}
//
//   ngOnInit() {
//     this.blogPosts = this.blogpostService.getBlogPosts();
//   }
//
//   editButtonClicked(blogPostToEdit: blogPost) {
//     this.clickSender.emit(blogPostToEdit);
//   }
//
// }
