import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditBlogPostComponent } from './edit-blog-post/edit-blog-post.component';

const appRoutes: Routes = [
  {
    path: 'edit',
    component: EditBlogPostComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
