import { Component, Input, Output, EventEmitter } from '@angular/core';
import { blogPost } from '../blog-post.model'

@Component({
  selector: 'app-edit-blog-post',
  templateUrl: './edit-blog-post.component.html',
  styleUrls: ['./edit-blog-post.component.css']
})
export class EditBlogPostComponent {
  @Input() childSelectedBlog: blogPost;
  @Output() clickedDone = new EventEmitter();
  @Output() clickedDelete = new EventEmitter();

  finishedEditing() {
    this.clickedDone.emit();
  }

  deleteBlogPost() {
    this.clickedDelete.emit();
  }
}
