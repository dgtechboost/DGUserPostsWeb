import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserPostsModel } from '../../models/user-posts.model';
import { UsersPostsService } from '../../services/users.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  userPosts: UserPostsModel;
  userId: number;

  constructor(
    private usersPostsService: UsersPostsService,
    private route: ActivatedRoute
  ) {
    this.userPosts = new UserPostsModel();
    this.subscription = this.route.params.subscribe(params => {
      this.userId = params['id'];
    })
  }

  ngOnInit() {
    this.getData();
  }

  private getData() {
    this.usersPostsService.getUserPosts(this.userId)
      .subscribe(
        response => {
          this.userPosts = response;
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
