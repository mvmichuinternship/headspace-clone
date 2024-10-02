import { createSlice } from '@reduxjs/toolkit';

export const musicSlice = createSlice({
    name:"audios",
    initialState:[],
    reducers:{
        addMusic: (state, action)=>{
            const audio = action.payload;
            state.push(audio)
        }
    }
})

export const {addMusic} = musicSlice.actions;

export default musicSlice.reducer;