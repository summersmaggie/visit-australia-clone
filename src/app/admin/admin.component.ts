import { Component, OnInit } from '@angular/core';
import { blogPost } from '../blog-post.model';
import { BlogpostService } from '../blogpost.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [BlogpostService]
})
export class AdminComponent implements OnInit {

  constructor(private blogpostService: BlogpostService) { }

  ngOnInit() {
  }

  submitForm(title: string, author: string, preview: string, content: string, tags: string[], image: string) {
    let newBlogPost: blogPost = new blogPost(title, author, preview, content, tags, image);
    this.blogpostService.addBlogPost(newBlogPost);
  }

}
