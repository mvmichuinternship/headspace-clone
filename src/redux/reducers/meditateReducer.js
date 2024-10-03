import { createSlice } from '@reduxjs/toolkit';
import { meditate } from '../../data/cardDataMeditate';

export const meditateSlice = createSlice({
    name:"audios",
    initialState: {meditate:meditate, meditateById:{}},
    reducers:{
        getmeditateById: (state, action)=>{
            const audio = state.meditate.filter(meditate=> meditate.id===action.payload);
            // state.push(audio)
            return{
                ...state, meditateById:audio
            }
        }
    }
})

export const {getmeditateById} = meditateSlice.actions;

export default meditateSlice.reducer;