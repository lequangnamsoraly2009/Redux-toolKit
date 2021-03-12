import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import randomColorReducer from '../features/RandomColor/randomColorSlice';



// configureStore tương đương với  createStore của Redux

export default configureStore({
    reducer: {
        counter:counterReducer,
        randomcolor: randomColorReducer,
    },
});