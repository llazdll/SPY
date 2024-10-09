// store/namesSlice.ts  
import { createSlice, PayloadAction } from '@reduxjs/toolkit';  

interface NamesState {  
  names: string[];  
}  

const initialState: NamesState = {  
  names: [],  
};  

const namesSlice = createSlice({  
  name: 'names',  
  initialState,  
  reducers: {  
    addName: (state, action: PayloadAction<string>) => {  
      state.names.push(action.payload);  
    },  
    deleteName: (state, action: PayloadAction<string>) => {  
      state.names = state.names.filter(name => name !== action.payload);  
    },  
  },  
});  

export const { addName, deleteName } = namesSlice.actions;  
export default namesSlice.reducer;