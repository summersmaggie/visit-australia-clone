import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { AppComponent } from './app.component';
import { BlogPostPreviewComponent } from './blog-post-preview/blog-post-preview.component';
import { EditBlogPostComponent } from './edit-blog-post/edit-blog-post.component';
import { AddBlogPostComponent } from './add-blog-post/add-blog-post.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { BlogPostDetailComponent } from './blog-post-detail/blog-post-detail.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AdminComponent } from './admin/admin.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    BlogPostPreviewComponent,
    EditBlogPostComponent,
    AddBlogPostComponent,
    AboutComponent,
    BlogPostDetailComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
