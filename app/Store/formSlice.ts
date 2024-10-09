import { createSlice } from '@reduxjs/toolkit';  

interface FormState {  
  spy: number;  
  player: number;  
  time: number;  
}  

const initialState: FormState = {  
  spy: 1,  
  player: 3,  
  time: 1,  
};  

const formSlice = createSlice({  
  name: 'form',  
  initialState,  
  reducers: {  
    incrementSpy: (state) => {  
      state.spy += 1;  
    },  
    decrementSpy: (state) => {  
      state.spy -= 1;  
    },  
    incrementPlayer: (state) => {  
      state.player += 1;  
    },  
    decrementPlayer: (state) => {  
      state.player -= 1;  
    },  
    incrementTime: (state) => {  
      state.time += 1;  
    },  
    decrementTime: (state) => {  
      state.time -= 1;  
    },  
  },  
});  

export const {  
  incrementSpy,  
  decrementSpy,  
  incrementPlayer,  
  decrementPlayer,  
  incrementTime,  
  decrementTime,  
} = formSlice.actions;  

export default formSlice.reducer;