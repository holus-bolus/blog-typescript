import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

interface SinglePost {
  id: string;
  title: string;
  text: string;
}

interface BlogState {
  posts: SinglePost[];
}

const initialState: BlogState = {
  posts: [],
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    addPost(state, action: PayloadAction<SinglePost>) {
      const newPost = {
        id: uuidv4(),
        title: action.payload.title,
        text: action.payload.text,
      };
      state.posts.push(newPost);
    },
    editPost(state, action: PayloadAction<SinglePost>) {
      const post = state.posts.find((post) => post.id === action.payload.id);
      if (post) {
        post.title = action.payload.title;
        post.text = action.payload.text;
      }
    },
    deletePost(state, action: PayloadAction<string>) {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
});

export const { addPost, editPost, deletePost } = blogSlice.actions;
export default blogSlice.reducer;
