import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GeneralState {
  
    page : String,

}

const initialState: GeneralState = {
    page : 'Signup',
  
};

const AppSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
      update_page: (state, action: PayloadAction<String>) => {
        state.page = action.payload;
      },
      
    },
  });

  export const { update_page } = AppSlice.actions;
  export default AppSlice.reducer;