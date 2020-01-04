import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UsersPostListComponent } from './components/users-post-list/users-post-list.component';
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import { PostsComponent } from './components/posts/posts.component';
import { UsersPostsService } from './services/users.service';
import { UsersRoutingModule } from './users-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		UsersPostListComponent,
		UserPostsComponent,
		PostsComponent
	],
	providers: [
		UsersPostsService
	],
	exports: [
	],
	imports: [
		CommonModule,/*** Exports all the basic Angular directives and pipes, * such as `NgIf`, `NgForOf`, `DecimalPipe`, and so on***/
        UsersRoutingModule,
        HttpClientModule
	]
})
export class UsersModule { } 