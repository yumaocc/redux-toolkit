import {configureStore} from '@reduxjs/toolkit'
import userReducer from './reducer'
export const store = configureStore({
    reducer :{
        userStore:userReducer
    }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch