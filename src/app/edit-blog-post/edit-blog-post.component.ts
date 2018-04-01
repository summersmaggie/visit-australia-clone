import { Component, OnInit, Input } from '@angular/core';
import { blogPost } from '../blog-post.model';
import { BlogpostService } from '../blogpost.service';

@Component({
  selector: 'app-edit-blog-post',
  templateUrl: './edit-blog-post.component.html',
  styleUrls: ['./edit-blog-post.component.css'],
  providers: [BlogpostService]
})
export class EditBlogPostComponent implements OnInit {
  @Input() selectedBlogPost;

  constructor(private blogPostService: BlogpostService) {}

  ngOnInit() {
  }

  beginUpdatingBlogPost(blogPostToUpdate) {
    this.blogPostService.updateBlogPost(blogPostToUpdate);
  }
  //
  // deleteBlogPost() {
  //   let index = this.blogPosts.indexOf(this.blogPostToDisplay);
  //   this.blogPosts.splice(index, 1);
  //   this.blogPostToDisplay = null;
  // }
}
