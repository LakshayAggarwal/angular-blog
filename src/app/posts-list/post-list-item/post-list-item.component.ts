import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() postData: Post;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToDetail(postId) {
    this.router.navigate([`/detail/${postId}`]);
  }

}
