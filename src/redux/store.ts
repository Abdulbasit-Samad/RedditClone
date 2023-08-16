import { configureStore } from '@reduxjs/toolkit';
import AppReducer from './Slice';


const store = configureStore({
    reducer: {
      auth: AppReducer,
    },
  });

  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  
  export default store;  