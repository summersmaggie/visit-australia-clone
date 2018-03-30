import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BlogPostPreviewComponent } from './blog-post-preview/blog-post-preview.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogPostPreviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
