import { configureStore } from '@reduxjs/toolkit';
import GeneralReducer from './Slices/GeneralSlice';
import SignupReducer from './Slices/SignupSlice';
import SignupUserReducer from './Slices/UserSlice';



const store = configureStore({
    reducer: {
    general: GeneralReducer,
    Signup : SignupReducer,
    SignupUser : SignupUserReducer,
    },
  });

  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  export default store;  