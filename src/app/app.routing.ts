import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditBlogPostComponent } from './edit-blog-post/edit-blog-post.component';
import { BlogPostPreviewComponent } from './blog-post-preview/blog-post-preview.component';
import { AboutComponent } from './about/about.component';
import { BlogPostDetailComponent } from './blog-post-detail/blog-post-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: BlogPostPreviewComponent
  },
  {
    path: 'edit/:id',
    component: EditBlogPostComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'blogPost/:id',
    component: BlogPostDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
