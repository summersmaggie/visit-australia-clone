import { Component, OnInit } from '@angular/core';
import { blogPost } from '../blog-post.model';
import { BlogpostService } from '../blogpost.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [BlogpostService, AuthenticationService]
})
export class AdminComponent {
  user;
  public isLoggedIn: Boolean;
  public userName: String;

  constructor(public blogpostService: BlogpostService, public authService: AuthenticationService) {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
      }
    });
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  submitForm(title: string, author: string, preview: string, content: string, tags: string[], image: string) {
    let newBlogPost: blogPost = new blogPost(title, author, preview, content, tags, image);
    this.blogpostService.addBlogPost(newBlogPost);
  }

}
