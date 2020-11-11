import { faArrowLeft, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { Post } from 'src/app/models/post';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as PostActions from '../store/post.actions';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  faThumbsUp = faThumbsUp;
  posts: Post[];
  isLiked: boolean;
  postData: Post;
  postId: number;

  constructor(private router: Router, private route: ActivatedRoute, private store: Store<{ postList: { posts: Post[] } }>) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postId = +params['postId'];
    })
    this.store.select('postList').subscribe((postList) => {
      this.posts = postList.posts;
      this.postData = this.posts.filter(post => post.postId === this.postId)[0];
    });
    this.isLiked = this.postData.isLiked;
  } 

  navigateToEdit(postId) {
    this.router.navigate([`/edit/${postId}`]);
  }

  deletePost() {
    this.store.dispatch(new PostActions.DeletePost(this.postId));
    this.router.navigate([`/`]);
  }

  toggleLike() {
    let updatedData = Object.assign({}, this.postData);
    updatedData.isLiked = !updatedData.isLiked;
    this.isLiked = updatedData.isLiked;
    this.store.dispatch(new PostActions.UpdatePost(updatedData));
  }

  backNavigation() {
    this.router.navigate(['/']);
  }

}
