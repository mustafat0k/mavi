import { ErrorResponse } from './ErrorResponse'
import {LoadingState} from './common.type'
export type Auth = {
  email?: string
  password?: string
  name?: string
}
 
export type UserState = {
  city?: object[] | undefined
  districts?:object[] | undefined
  _id?: any
  name?:string
  email?: string
  first?: string
  last?: string
  role?: any
  slug?: string
  avatar?: string
  bio?: string
}

export type AuthState = {
  user?:UserState
  isAuth:Boolean | undefined
  loading: LoadingState
  error?: ErrorResponse | string
  message?: string
}

