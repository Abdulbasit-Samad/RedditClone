import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SignUpState {

    isValidSignupEmail : boolean,
    isLoadingSignupButton : boolean,
    SignupButtonClicked : boolean,

}

const initialState: SignUpState = {

    isValidSignupEmail : true,
    isLoadingSignupButton :false,
    SignupButtonClicked : false
  
};

const SignupSlice = createSlice({
    name: 'Signup',
    initialState,
    reducers: {
        Set_isValidSignupEmail: (state, action: PayloadAction<boolean>) => {
        state.isValidSignupEmail = action.payload;
      },

      Set_isLoadingSignupButton : (state, action: PayloadAction<boolean>) => {
       state.isLoadingSignupButton =action.payload;
      },

      Set_SignupButtonClicked : (state, action: PayloadAction<boolean>) => {
        state.SignupButtonClicked = action.payload;
      }
      
    },
  });

  export const { Set_isValidSignupEmail, Set_isLoadingSignupButton, Set_SignupButtonClicked } = SignupSlice.actions;
  export default SignupSlice.reducer;

{/*const [isValid, setIsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
const [buttonclicked, setbutton] = useState(false); */}