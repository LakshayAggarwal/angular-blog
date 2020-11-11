import { Action } from '@ngrx/store';
import { Post } from '../models/post';

export const ADD_POST = 'ADD_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';

export class AddPost implements Action {
  readonly type = ADD_POST;

  constructor(public payload: Post) {}
}

export class UpdatePost implements Action {
  readonly type = UPDATE_POST;

  constructor(public payload: Post) {}
}

export class DeletePost implements Action {
  readonly type = DELETE_POST;

  constructor(public payload: number) {}
}

export type PostActions = AddPost | UpdatePost | DeletePost;