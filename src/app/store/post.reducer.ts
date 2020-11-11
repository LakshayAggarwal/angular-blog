import * as PostActions from './post.actions';

const initialState = {
  posts: [{ postId: 1, title: "New Post", category: "new", content: "new content for post.", isLiked: false}]
};

export function postReducer(state = initialState, action: PostActions.PostActions) {
  switch(action.type) {
    case PostActions.ADD_POST:
      let length = state.posts.length;
      // TODO: Find a better way to do this
      let payload = Object.assign({}, action.payload);
      payload.postId = state.posts[length - 1].postId + 1;
      return {
        ...state,
        posts: [...state.posts, payload]
      };
    case PostActions.UPDATE_POST:
      let index: number;
      for(let i=0;i<state.posts.length;i++) {
        if(state.posts[i].postId === action.payload.postId ) {
          index = i;
          break;
        }
      }
      let updatedPosts = JSON.parse(JSON.stringify(state)).posts;
      updatedPosts.splice(index, 1, action.payload);
      console.log(updatedPosts);
      return {
        ...state,
        posts: updatedPosts
      };
      case PostActions.DELETE_POST:
        let deleteIndex: number;
        for(let i=0;i<state.posts.length;i++) {
          if(state.posts[i].postId === action.payload ) {
            deleteIndex = i;
            break;
          }
        }
        let newPosts = [...state.posts]
        newPosts.splice(deleteIndex, 1);
        return {
          ...state,
          posts: newPosts
        };
    default:
      return state;
  }
}