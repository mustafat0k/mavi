import {LoadingState} from './common.type'
import { ErrorResponse } from './ErrorResponse'

export type User = {
  name?: string
  first?: string
  last?: string
  email?: string
  bio?: string 

}

export type PersistedUser = User & {
  _id?: string
}


export type UserState = {
  users: PersistedUser[]
  loading: LoadingState
  error?: ErrorResponse | string
  tempUser?: PersistedUser
  backupUser?: PersistedUser
  backupPosition?: number
}