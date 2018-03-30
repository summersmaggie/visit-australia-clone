import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';

import { AppComponent } from './app.component';
import { BlogPostPreviewComponent } from './blog-post-preview/blog-post-preview.component';
import { EditBlogPostComponent } from './edit-blog-post/edit-blog-post.component';
import { AddBlogPostComponent } from './add-blog-post/add-blog-post.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogPostPreviewComponent,
    EditBlogPostComponent,
    AddBlogPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
