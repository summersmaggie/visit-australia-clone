import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { blogPost } from '../blog-post.model';
import { BlogpostService } from '../blogpost.service';

@Component({
  selector: 'app-edit-blog-post',
  templateUrl: './edit-blog-post.component.html',
  styleUrls: ['./edit-blog-post.component.css'],
  providers: [BlogpostService]
})
export class EditBlogPostComponent implements OnInit {
  blogPostId: number;
  blogPostToDisplay: blogPost;
  blogPosts: blogPost[];

  constructor(private route: ActivatedRoute, private location: Location, private blogpostService: BlogpostService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.blogPostId = parseInt(urlParameters['id']);
    });
    this.blogPostToDisplay = this.blogpostService.getBlogPostById(this.blogPostId);
  }

  // finishedEditing(clickedBlogPost: blogPost) {
  //   this.route.navigate([""]);
  //   console.log("hi");
  // }

  // deleteBlogPost() {
  //   this.clickedDelete.emit();
  // }
}
