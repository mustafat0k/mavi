import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { CoreState } from 'stores/store'
import { ErrorResponse, ErrorResult, ThunkConfig } from 'stores/types/ErrorResponse'
import api from 'helpers/api'
import { User, PersistedUser, UserState  } from 'stores/types/user.type'
import {LoadingState} from 'stores/types/common.type'



const initialState: UserState = {
  users: [],
  loading: LoadingState.IDLE,
  error: undefined,
  tempUser: undefined,
  backupUser: undefined,
  backupPosition: undefined,
}

/**
 * Login account
 *
 * @param   {Object} state User account values
 * @returns {Object} User data
 * @method POST 
 */

export const getUsers = createAsyncThunk<PersistedUser[], void, ThunkConfig>(
    'users/users',
    async (_, thunkAPI) => {
      try {
        const response = await api.get('/users')
        return response.data.users
      } catch (error) {
        return thunkAPI.rejectWithValue({ error: (error as Error).message })
      }
    }
  )


/**
 * Login account
 *
 * @param   {Object} state User account values
 * @returns {Object} User data
 * @method POST 
 */
  
export const addUser = createAsyncThunk<PersistedUser, User, ThunkConfig>(
    'users/add',
    async (values:any , thunkAPI) => {
      try {
        const response = await api.get('/users/create', values )
        return response.data
      } catch (error) {
        return thunkAPI.rejectWithValue({ error: (error as Error).message })
      }
    }
  )

  

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder.addCase(addUser.pending, (state) => {
        delete state.error
      })
  
      builder.addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload)
      })
  
      builder.addCase(addUser.rejected, (state, action) => {
        //@ts-ignore
        state.error = action.payload?.error
      })
  

    builder.addCase(getUsers.pending, (state) => {
        state.users = []
        state.loading = LoadingState.LOADING
      })
  
      builder.addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload
        state.loading = LoadingState.LOADED
      })
  
      builder.addCase(getUsers.rejected, (state, action) => {
          state.users = []
        state.loading = LoadingState.ERROR
        //@ts-ignore
        state.error = action.payload?.error
      })
  },
})


export const selectUsers = createSelector(
    (state: CoreState) => ({
      users: state.users?.users,
      error: state.users?.error,
    }),
    (state) => state
  )
export default usersSlice.reducer



// get all users
// search users
// get me
// get usre by id
// update user



/*** FRIENDSHIP ***/

// get friends of mine

export const getFriends = createAsyncThunk<PersistedUser[], void, ThunkConfig>(
  'users/friends',
  async (_, thunkAPI) => {
    try {
      const response = await api.post(`/user/friends`)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: (error as Error).message })
    }
  }
)



// get suggestions

export const getSuggestions = createAsyncThunk<PersistedUser[], void, ThunkConfig>(
  'users/suggestions',
  async (_, thunkAPI) => {
    try {
      const response = await api.post(`/user/suggestions`)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: (error as Error).message })
    }
  }
)


// add request
// remove friend
// accept request
// isFriend
//myfriends
//friends of user 



/*** FOLLOWMENT ***/

// follow
// unfollow
// userFollowers
// userFollowings
// isFollow



/*** LIKE SYSTEM ***/

//toggleLike
//toggleDislike



/*** TEAM ***/

//acceptInvate
//rejectInvate