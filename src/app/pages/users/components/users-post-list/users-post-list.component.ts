import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersPostListModel } from '../../models/users-post-list.model';
import { UsersPostsService } from '../../services/users.service';

@Component({
  selector: 'app-users-post-list',
  templateUrl: './users-post-list.component.html',
  styleUrls: ['./users-post-list.component.scss']
})
export class UsersPostListComponent implements OnInit {
  usersPosts: UsersPostListModel[];

  constructor(
    private usersPostsService: UsersPostsService,
    private router: Router
  ) {
    this.usersPosts = [];
  }

  ngOnInit() {
    this.getData();
  }

  private getData() {
    this.usersPostsService.getUsersPosts()
      .subscribe(
        response => {
          this.usersPosts = response;
        }
      );
  }

  userDetails(id: number) {
    this.router.navigate([`/users/usersposts/user/${id}`]);
  }
}
