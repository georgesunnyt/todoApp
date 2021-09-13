import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './appSlice'

export const store =  configureStore({
    reducer: {
        todo: todoReducer,
    }
})