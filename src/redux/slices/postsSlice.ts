// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface Post {
//   id: number;
//   title: string;
//   description: string;
// }

// const initialState: Post[] = [
//   { id: 1, title: "Post 1", description: "Description of Post 1" },
//   { id: 2, title: "Post 2", description: "Description of Post 2" },
//   { id: 3, title: "Post 3", description: "Description of Post 3" },
// ];

// const postsSlice = createSlice({
//   name: "posts",
//   initialState: initialState,
//   reducers: {
//     addPosts: (state, action: PayloadAction<Post[]>) => {
//       state.push(...action.payload);
//     },
//     addPost: (state, action: PayloadAction<Post>) => {
//       const { id, title, description } = action.payload;
//       state.push({ id, title, description });
//     },
//     updatePost: (state, action: PayloadAction<Post>) => {
//       const { id, title, description } = action.payload;
//       const postIndex = state.findIndex((post) => post.id === id);
//       if (postIndex !== -1) {
//         state[postIndex].title = title;
//         state[postIndex].description = description;
//       }
//     },
//     deletePost: (state, action: PayloadAction<number>) => {
//       const postId = action.payload;
//       return state.filter((post) => post.id !== postId);
//     },
//   },
// });



// export const { addPosts, addPost, updatePost, deletePost } = postsSlice.actions;
// export default postsSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Post {
  id: number;
  title: string;
  description: string;
}

// Retrieve data from local storage or use initialState if no data is present
const getInitialState = (): Post[] => {
  const storedData = localStorage.getItem("posts");
  return storedData
    ? JSON.parse(storedData)
    : [
        { id: 1, title: "Post 1", description: "Description of Post 1" },
        { id: 2, title: "Post 2", description: "Description of Post 2" },
        { id: 3, title: "Post 3", description: "Description of Post 3" },
      ];
};

const initialState: Post[] = getInitialState();

const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    addPosts: (state, action: PayloadAction<Post[]>) => {
      state.push(...action.payload);
      localStorage.setItem("posts", JSON.stringify(state));
    },
    addPost: (state, action: PayloadAction<Post>) => {
      const { id, title, description } = action.payload;
      state.push({ id, title, description });
      localStorage.setItem("posts", JSON.stringify(state));
    },
    updatePost: (state, action: PayloadAction<Post>) => {
      const { id, title, description } = action.payload;
      const postIndex = state.findIndex((post) => post.id === id);
      if (postIndex !== -1) {
        state[postIndex].title = title;
        state[postIndex].description = description;
        localStorage.setItem("posts", JSON.stringify(state));
      }
    },
    deletePost: (state, action: PayloadAction<number>) => {
      const postId = action.payload;
      const updatedState = state.filter((post) => post.id !== postId);
      localStorage.setItem("posts", JSON.stringify(updatedState));
      return updatedState;
    },
  },
});

export const { addPosts, addPost, updatePost, deletePost } = postsSlice.actions;
export default postsSlice.reducer;
