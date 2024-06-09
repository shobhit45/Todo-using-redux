import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/TOdoslice';
export const store=configureStore({
    reducer:todoReducer
    
})

