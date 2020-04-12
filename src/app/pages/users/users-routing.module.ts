import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import { UsersPostListComponent } from './components/users-post-list/users-post-list.component';

const routes: Routes = [
    { 
        path: '', 
        redirectTo: 'userspostslist', 
        pathMatch: 'full' 
    },
    {
        path: 'userspostslist',
        component: UsersPostListComponent
    },
    {
        path: 'usersposts',
        component: UserPostsComponent
    },
    {
        path: 'usersposts/user/:id',
        component: UserPostsComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }