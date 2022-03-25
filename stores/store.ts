import { combineReducers, configureStore, getDefaultMiddleware, ThunkAction } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { Action } from 'redux'

import auth from './slices/authSlice'
import users from './slices/userSlice'
import general from './slices/generalSlice'
import profiles from './slices/profileSlice'
import projects from './slices/projectSlice'
import notifications from './slices/notificationsSlice'
import note from './slices/noteSlice'
import filter from './slices/filterSlice'
import { createWrapper } from 'next-redux-wrapper'

const rootReducer = combineReducers({
  auth,
  users,
  general,
  profiles,
  projects,
  notifications,
  filter,
  note
})

export type CoreState = ReturnType<typeof rootReducer>


const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()


//@ts-ignore
export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

//@ts-ignore
export const wrapper = createWrapper<AppStore>(store);

export default store
