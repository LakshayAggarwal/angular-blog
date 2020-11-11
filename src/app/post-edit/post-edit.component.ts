import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from 'src/app/models/post';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';

import * as PostActions from '../store/post.actions';


@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  createForm: FormGroup;
  posts: Post[];
  postId: number;
  postData: Post;

  constructor(private router:Router, private route: ActivatedRoute, private store: Store<{ postList: { posts: Post[] } }>) { }

  ngOnInit(): void {
    this.store.select('postList').subscribe((postList) => {
      this.posts = postList.posts;
    });

    this.route.params.subscribe(params => {
      this.postId = +params['postId'];
    })

    this.postData = this.posts.filter(post => post.postId === this.postId)[0];

    this.createForm = new FormGroup({
      'postId': new FormControl(this.postData.postId),
      'title': new FormControl(this.postData.title, [Validators.required, Validators.minLength(6)]),
      'category': new FormControl(this.postData.category, Validators.required),
      'content': new FormControl(this.postData.content, Validators.required),
      'isLiked': new FormControl(this.postData.isLiked)
    });
  }

  onSubmit() {
    let newPost  = Object.assign({}, this.createForm.value);
    this.store.dispatch(new PostActions.UpdatePost(newPost));
    this.router.navigate(['/']);
  }

  cancelClick() {      
    this.router.navigate(['/']);
  }

  backNavigation() {
    this.cancelClick();
  }

}
