import { Post } from 'src/app/models/post';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';

import * as PostActions from '../store/post.actions';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  createForm: FormGroup;

  constructor(private router:Router, private store: Store<{ postList: { posts: Post[] } }>) { }

  ngOnInit(): void {
    this.createForm = new FormGroup({
      'postId': new FormControl(null),
      'title': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'category': new FormControl(null, Validators.required),
      'content': new FormControl(null, Validators.required),
      'isLiked': new FormControl(false)
    });
  }

  onSubmit() {
    let newPost  = Object.assign({}, this.createForm.value);
    this.store.dispatch(new PostActions.AddPost(newPost));
    this.router.navigate(['']);
  }

  cancelClick() {      
    this.router.navigate(['/']);
  }

  backNavigation() {
    this.cancelClick();
  }

}
