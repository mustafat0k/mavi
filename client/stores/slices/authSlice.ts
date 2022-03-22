import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { CoreState } from 'stores/store'
import api from 'helpers/api'
import { ErrorResponse, ErrorResult, ThunkConfig, } from 'stores/types/ErrorResponse'
import {  User } from '@stores/types/user.type'
import {UserState, Auth, AuthState } from 'stores/types/auth.type'
import {LoadingState} from 'stores/types/common.type'

/**
 * Login account
 *
 * @param   {Object} state User account values
 * @returns {Object} User data
 * @method POST 
 */
export const signin = createAsyncThunk<Auth, ThunkConfig>(
  'auth/signin',
  async (values, thunkAPI) => {
    try {
      const response = await api.post('/signin', values)
      return response.data;

    } catch (error) {
      return thunkAPI.rejectWithValue({ error: (error as Error).message })
    }
  }
)

/**
 * Register account
 *
 * @param   {Object} state User account values
 * @returns {Object} The new user data
 * @method POST 
 */
export const signup = createAsyncThunk<Auth, ThunkConfig>
('auth/signup',
  async (values, thunkAPI) => {
    try {
      const response = await api.post('/signup', values)
      return response.data;

    } catch (error) {
      return thunkAPI.rejectWithValue({ error: (error as Error).message })
    }
  }
)

  
/**
 * User information
 *
 * @param   {void}
 * @returns {Object} Get user's data
 * @method POST 
 */
export const me = createAsyncThunk<void, ThunkConfig>
('auth/me', async (_, thunkAPI) => {
    try {
      const response = await api.post('/me')
      return response.data

    } catch (error) {
      return thunkAPI.rejectWithValue({ error: (error as Error).message })
    }
  }
)

/**
 * Update user intormation
 *
 * @param   {Object} state User account values
 * @returns {Object} The new user data
 * @method POST 
 */

 export const change = createAsyncThunk<Auth, ThunkConfig>
 ('auth/personal', async (values, thunkAPI) => {
    try {
      const response = await api.post('/users', values)
      return response.data;
      

    } catch (error) {
      return thunkAPI.rejectWithValue({ error: (error as Error).message })
    }
  }
)


/**
 * Update user avatar
 *
 * @param   {Object} state User account values
 * @returns {Object} The new user data
 * @method POST 
 */

 export const changeAvatar = createAsyncThunk<Auth, ThunkConfig>
('auth/avatar', async (value:any, thunkAPI) => {
    try {

      const formData = new FormData();
      value && formData.append("avatar", value);

      const response = await api.post('/users/avatar',formData);
      return response.data.path;


    } catch (error) {
      return thunkAPI.rejectWithValue({ error: (error as Error).message })
    }
  }
)

const initialState: AuthState = {
  user: {},
  isAuth:undefined,
  loading: LoadingState.IDLE,
  error: undefined,
  message: ''
}


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    meLocal:(state)=>{
      state.user = {
        "name": "Tester Test",
        "_id": "61967ded8965957219303c57",
        "email": "test@test.com",
        "first": "test",
        "last": "test",
        "role": "visitor",
        "slug": "test",
        "avatar": "/faces/1.png",
        "bio": "React Developer",
      }
      state.isAuth = true;
    },
    signLocal: (state,action)=>{
      localStorage.setItem("accessToken", 'fake-accessToken');
      localStorage.setItem("refreshToken", 'fake-refreshToken');
      state.isAuth = true;
    },
    signout: (state) => {
      state.user =  {}
      state.isAuth = false;
      state.loading = LoadingState.LOADED;
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')

    },
    removeAllEra: state => {
      state.user = {
        ...state.user,
        city:[],
        districts:[]
      }

    },

  },
  extraReducers: (builder) => {
    // SIGNIN
    builder.addCase(signin.pending, (state) => {
      delete state.error
    })

    builder.addCase(signin.fulfilled, (state, action:any) => {
        localStorage.setItem("accessToken", action.payload?.accessToken);
        localStorage.setItem("refreshToken", action.payload?.refreshToken);
        state.isAuth = true;
        
    })

    builder.addCase(signin.rejected, (state, action:any) => {
      state.error = action.payload?.error
      state.isAuth = false;

    })
    // SIGNUP
    builder.addCase(signup.pending, (state) => {
      delete state.error
    })

    builder.addCase(signup.fulfilled, (state, action:any) => {
      localStorage.setItem("accessToken", action.payload?.accessToken);
      localStorage.setItem("refreshToken", action.payload?.refreshToken);
      state.isAuth = true;
      
    })

    builder.addCase(signup.rejected, (state, action:any) => {
      state.error = action.payload?.error
      state.isAuth = false;

    })
    // ME
    builder.addCase(me.pending, (state) => {
      state.loading = LoadingState.LOADING
    })

    builder.addCase(me.fulfilled, (state, action: any) => {
      state.user = action.payload
      const {name} = action.payload
      if(name) state.isAuth = true
      state.loading = LoadingState.LOADED
    })

    builder.addCase(me.rejected, (state, action: any) => {
      state.loading = LoadingState.ERROR
      state.isAuth = false;
      state.error = action.payload?.error
    })

    // AVATAR
    builder.addCase(changeAvatar.fulfilled, (state, action: any) => {
      state.user = {...state.user, avatar: action.payload  }
    })

    builder.addCase(changeAvatar.rejected, (state, action) => {
    })

    // CHANGE
    builder.addCase(change.pending, (state) => {
      state.loading = LoadingState.LOADING

    })
    builder.addCase(change.fulfilled, (state, action:any) => {
      state.loading = LoadingState.LOADED
      state.user =  {...state.user, ...action.payload} //action.payload    
      state.message = 'Updated Successfully'

    })

    builder.addCase(change.rejected, (state, action:any) => {
      state.loading = LoadingState.ERROR
      state.error = action.payload?.error

    })

  },
})

export const selectAuth = createSelector(
  (state: CoreState) => ({
    isAuth: state.auth.isAuth,
    user: state.auth.user,
    id: state.auth?.user?._id,
    auth: state.auth,
    error: state.auth.error,
    loading: state.auth.loading,
  }),
  (state) => state
)

export const { signLocal, meLocal, signout, removeAllEra } = authSlice.actions

export default authSlice.reducer