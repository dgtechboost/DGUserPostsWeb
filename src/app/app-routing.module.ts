import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersPostListComponent } from './pages/users/components/users-post-list/users-post-list.component';
import { UserPostsComponent } from './pages/users/components/user-posts/user-posts.component';

const routes: Routes = [
  {
    path: 'usersposts',
    component: UsersPostListComponent
  },
  {
    path: 'usersposts/user/:id',
    component: UserPostsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
