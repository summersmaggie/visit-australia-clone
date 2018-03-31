import { Component, Input, Output } from '@angular/core';
import { blogPost } from './blog-post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public selectedBlogPost = null;
  title = 'Visit Australia';

}
