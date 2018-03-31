import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { blogPost } from '../blog-post.model'

@Component({
  selector: 'app-edit-blog-post',
  templateUrl: './edit-blog-post.component.html',
  styleUrls: ['./edit-blog-post.component.css']
})
export class EditBlogPostComponent implements OnInit {
  blogPostId: number = null;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.blogPostId = parseInt(urlParameters['id']);
    });
  }
}
  // finishedEditing() {
  //   this.clickedDone.emit();
  // }
  //
  // deleteBlogPost() {
  //   this.clickedDelete.emit();
  // }
}
