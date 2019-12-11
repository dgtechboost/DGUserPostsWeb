import { UsersPostListModel } from '../models/users-post-list.model';
import { Observable } from 'rxjs';
import { UserPostsModel } from '../models/user-posts.model';

export interface IUsersPostsService {
    getUsersPosts() : Observable<UsersPostListModel[]>;
    getUserPosts(userId:number) : Observable<UserPostsModel>;
}