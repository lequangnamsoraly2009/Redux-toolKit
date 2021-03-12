import { createSlice } from '@reduxjs/toolkit';

// createSlice thực ra là createReducer và createAction 

export const counterSlice = createSlice({
    name: 'counter',
    // Khởi tạo giá trị ban đầu cho State 
    initialState: {
        value: 0,
    },
    // Defind a reducers - khi nhận 1 action thì reducer sẽ chịu trách nhiệm thay đổi state nếu action thỏa điều kiện của reducer
    reducers:{
        increment: state => {
            state.value +=1;
        },
        decrement: state => {
            state.value -=1;
        },
        incrementByAmount: (state,action) => {
            state.value += action.payload;
        }
    }
});

// Khởi tạo 3 điều kiện cho actions 
export const { increment , decrement , incrementByAmount} = counterSlice.actions;

export const selectCount = state => state.counter.value;

export default counterSlice.reducer;

