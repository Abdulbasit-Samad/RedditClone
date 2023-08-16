import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  
    page : String,

}

const initialState: AppState = {
    page : '',
  
};

const AppSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      update_page: (state, action: PayloadAction<String>) => {
        state.page = action.payload;
      },
      
    },
  });

  export const { update_page } = AppSlice.actions;
  export default AppSlice.reducer;