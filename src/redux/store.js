import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import roomReducer from './roomSlice'

const rootReducer = combineReducers({
   room: roomReducer,
})
//non serialized error fix
const customizedMiddleware = getDefaultMiddleware({
   serializableCheck:false
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: customizedMiddleware
})