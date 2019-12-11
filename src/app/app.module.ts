import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersPostListComponent } from './pages/users/components/users-post-list/users-post-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersPostsService } from './pages/users/services/users.service';
import { UserPostsComponent } from './pages/users/components/user-posts/user-posts.component';
import { PostsComponent } from './pages/users/components/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersPostListComponent,
    UserPostsComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UsersPostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
