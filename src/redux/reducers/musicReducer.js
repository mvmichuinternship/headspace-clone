import { createSlice } from '@reduxjs/toolkit';
import { music } from '../../data/musicData';

export const musicSlice = createSlice({
    name:"audios",
    initialState: {music:music, musicById:{}},
    reducers:{
        getMusicById: (state, action)=>{
            const audio = state.music.filter(music=> music.id===action.payload);
            // state.push(audio)
            return{
                ...state, musicById:audio
            }
        }
    }
})

export const {getMusicById} = musicSlice.actions;

export default musicSlice.reducer;