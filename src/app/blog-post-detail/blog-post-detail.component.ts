import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { blogPost } from '../blog-post.model';
import { BlogpostService } from '../blogpost.service';

@Component({
  selector: 'app-blog-post-detail',
  templateUrl: './blog-post-detail.component.html',
  styleUrls: ['./blog-post-detail.component.css'],
  providers: [BlogpostService]
})
export class BlogPostDetailComponent implements OnInit {
  blogPostId: number;
  blogPostToDisplay: blogPost;
  
  constructor(private route: ActivatedRoute, private location: Location, private blogpostService: BlogpostService ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.blogPostId = parseInt(urlParameters['id']);
    });
    this.blogPostToDisplay = this.blogpostService.getBlogPostById(this.blogPostId);
  }

}
