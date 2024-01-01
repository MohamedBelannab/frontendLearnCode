import { configureStore } from '@reduxjs/toolkit'
import langSlice from './langSlice'
import blogSlice from './blogSlice'
import quizSlice from './quizSlice'
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE
export const store = configureStore({
    reducer: {
            language : langSlice  , 
            quiz : quizSlice ,
            blog : blogSlice

        },

  })