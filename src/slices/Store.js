import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './loginSlice'
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE
export const store = configureStore({
    reducer: {
            login : loginSlice ,
        },

  })