import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  posts: Post[];

  constructor(private store: Store<{ postList: { posts: Post[] } }>) { }

  ngOnInit(): void {
    this.store.select('postList').subscribe(postList => {
      this.posts = postList.posts
    });
  }

}
