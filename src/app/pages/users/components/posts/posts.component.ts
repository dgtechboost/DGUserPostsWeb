import { Component, Input } from '@angular/core';
import { PostListModel } from '../../models/post-list.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent{
  @Input() posts: PostListModel[];
}
