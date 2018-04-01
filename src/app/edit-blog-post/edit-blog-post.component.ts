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

  beginDeletingBlogPost(blogPostToDelete) {
    if(confirm("Are you sure you want to delete this blog post?")) {
      this.blogPostService.deleteBlogPost(blogPostToDelete);
    }
  }
}
