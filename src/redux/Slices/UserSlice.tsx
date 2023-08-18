import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SignUpUserState {
  
    UserSignUpEmail : String,
    UserName : String,

}

const initialState: SignUpUserState = {

    UserSignUpEmail : '',
    UserName : '',
  
};

const UserSlice = createSlice({
    name: 'USignUpUser',
    initialState,
    reducers: {
        Set_UserSignUpEmail: (state, action: PayloadAction<String>) => {
        state.UserSignUpEmail = action.payload;
      },
      
      Set_UserName : (state, action: PayloadAction<String>) => {
         state.UserName=action.payload;
      }
      
      
    },
  });
  export const {Set_UserSignUpEmail, Set_UserName} = UserSlice.actions;
  export default UserSlice.reducer;
