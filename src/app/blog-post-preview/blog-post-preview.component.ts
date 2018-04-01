import { Component, OnInit } from '@angular/core';
import { blogPost } from '../blog-post.model';
import { Router } from '@angular/router';
import { BlogpostService } from '../blogpost.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-blog-post-preview',
  templateUrl: './blog-post-preview.component.html',
  styleUrls: ['./blog-post-preview.component.css'],
  providers: [BlogpostService]
})

export class BlogPostPreviewComponent implements OnInit {
  blogPosts: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private blogpostService: BlogpostService) {}

  ngOnInit() {
    this.blogPosts = this.blogpostService.getBlogPosts();
  }

  goToEditPage(clickedBlogPost) {
    this.router.navigate(['edit', clickedBlogPost.$key]);
  }

  goToDetailPage(clickedBlogPost) {
    this.router.navigate(['blogPost', clickedBlogPost.$key]);
  };
}
