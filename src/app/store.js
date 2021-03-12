import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';


// configureStore tương đương với  createStore của Redux

export default configureStore({
    reducer: {
        counter:counterReducer,
    },
});