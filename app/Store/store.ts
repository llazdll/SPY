import { configureStore } from '@reduxjs/toolkit';  
import formReducer from './formSlice';  
import namesReducer from './namesSlice';  
import hintReducer from './hintSlice'; 
const store = configureStore({  
  reducer: {  
    form: formReducer,  
    names: namesReducer,
    hint: hintReducer,
  },  
});  

export type RootState = ReturnType<typeof store.getState>;  
export type AppDispatch = typeof store.dispatch;  

export default store;