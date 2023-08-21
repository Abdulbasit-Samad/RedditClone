import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SignUpUserState {
  
    UserSignUpEmail : String,
    UserName : String,
    PhotoUrl : String,

}


const initialState: SignUpUserState = {

    UserSignUpEmail : '',
    UserName : '',
    PhotoUrl : '',
  
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
      },

      Set_UserProfile : (state, action: PayloadAction<String>) => {
        state.PhotoUrl=action.payload;
      }
      
      
    },
  });
  export const {Set_UserSignUpEmail, Set_UserName, Set_UserProfile} = UserSlice.actions;
  export default UserSlice.reducer;
