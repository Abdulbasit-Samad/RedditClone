import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PostState {
  
    postType : String,

}

const initialState: PostState = {
    postType : 'Textual',
  
};

const PostSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
      update_postType: (state, action: PayloadAction<String>) => {
        state.postType = action.payload;
      },
      
    },
  });

  export const { update_postType } = PostSlice.actions;
  export default PostSlice.reducer;