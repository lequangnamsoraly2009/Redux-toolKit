import { createSlice } from '@reduxjs/toolkit';

const listColor = ['green','red','yellow'];

export const RandomColor = createSlice({
    name: 'randomcolor',
    initialState:{
        color: 'green',
    },
    reducers:{
        changeColor: state => {
            state.color = listColor[Math.floor(Math.random()*listColor.length)];
        },
        changeColorUnMount:(state,action)=>{
            state.color = action.payload;
        }
    }
});

export const {changeColor,changeColorUnMount} = RandomColor.actions;

export const selectColor = state => state.randomcolor.color;

export default RandomColor.reducer;