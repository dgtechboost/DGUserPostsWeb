import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserPostsModel } from '../models/user-posts.model';
import { UsersPostListModel } from '../models/users-post-list.model';
import { IUsersPostsService } from './users.service.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersPostsService implements IUsersPostsService {
  private baseUrl: string = "http://localhost:56189";

  constructor(
    private httpClient: HttpClient
  ) { }

  getUsersPosts(): Observable<UsersPostListModel[]> {
    return this.httpClient.get<UsersPostListModel[]>(
      `${this.baseUrl}/api/usersposts`
    )
      .pipe(map(result => {
        return result.map(x => new UsersPostListModel(x))
      }
      ));
  }

  getUserPosts(userId: number): Observable<UserPostsModel> {
    return this.httpClient.get<UserPostsModel>(
      `${this.baseUrl}/api/userposts/user/${userId}`
    );
  }
}