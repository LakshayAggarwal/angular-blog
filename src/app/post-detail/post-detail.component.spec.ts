import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailComponent } from './post-detail.component';

describe('PostDetailComponent', () => {
  let component: PostDetailComponent;
  let fixture: ComponentFixture<PostDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDetailComponent ],
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({})
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailComponent);
    component = fixture.componentInstance;
    component.postData = { postId: 1, title: "New Post", category: "new", content: "new content for post.", isLiked: false };
    fixture.detectChanges();
  });

  it('should create', () => {
    // component.isLiked = false;
    // component.posts = [{ postId: 1, title: "New Post", category: "new", content: "new content for post.", isLiked: false }];
    expect(component).toBeTruthy();
  });
});
