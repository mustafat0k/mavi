import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { CoreState } from 'stores/store'
import { ErrorResponse } from 'stores/types/ErrorResponse'
import api from 'helpers/api'
import { User, PersistedUser } from 'stores/types/user.type'

type ErrorResult = {
  error: ErrorResponse | string
}

type ThunkConfig = { rejectValue: ErrorResult }


enum LoadingState {
  IDLE = 'idle',
  LOADING = 'loading',
  LOADED = 'loaded',
  ERROR = 'error',
}

type UserState = {
  loading: LoadingState
  error?: ErrorResponse | string
  profiles?: any
  profile?: any
}

const initialState: UserState = {
  profiles: [],
  profile:{},
  loading: LoadingState.IDLE,
  error: undefined,
}


export const getProfiles = createAsyncThunk<void, ThunkConfig>(
  'profiles/profiles',
  async (id, thunkAPI) => {
    try {
        const response = await api.post(`/profiles/all/${id}`)
        return response.data
       
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: (error as Error).message })
    }
  }
)

export const getProfile = createAsyncThunk<void, ThunkConfig>(
  'profiles/profile',
  async (_, thunkAPI) => {
    try {
        const response = await api.post(`/profiles/profile`)
        return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: (error as Error).message })
    }
  }
)

export const addProfile = createAsyncThunk<void, ThunkConfig>(
  'profiles/create',
  async (values, thunkAPI) => {
    try {
      const response = await api.post(`/profiles`, values)
      return response.data

    } catch (error) {
      return thunkAPI.rejectWithValue({ error: (error as Error).message })
    }
  }
)


export const updateProfile = createAsyncThunk<void, ThunkConfig>(
  'profiles/update',
  async (values, thunkAPI) => {
    try {
      const response = await api.post(`/profiles`, values)
      return response.data

    } catch (error) {
      return thunkAPI.rejectWithValue({ error: (error as Error).message })
    }
  }
)


  

/*** EDUCATION ****/
export const createEducation = createAsyncThunk<void, ThunkConfig>(
    'profiles/create-education',
    async (_, thunkAPI) => {
      try {
  
      } catch (error) {
        return thunkAPI.rejectWithValue({ error: (error as Error).message })
      }
    }
  )
  
  
  export const updateEducation = createAsyncThunk<void, ThunkConfig>(
    'profiles/update-education',
    async (_, thunkAPI) => {
      try {
  
      } catch (error) {
        return thunkAPI.rejectWithValue({ error: (error as Error).message })
      }
    }
  )
  
  

/*** EXPERIENCE ****/
export const createExperience = createAsyncThunk<void, ThunkConfig>(
    'profiles/create-experience',
    async (_, thunkAPI) => {
      try {
  
      } catch (error) {
        return thunkAPI.rejectWithValue({ error: (error as Error).message })
      }
    }
  )
  
  
  export const updateExperience = createAsyncThunk<void, ThunkConfig>(
    'profiles/update-experience',
    async (_, thunkAPI) => {
      try {
  
      } catch (error) {
        return thunkAPI.rejectWithValue({ error: (error as Error).message })
      }
    }
  )
  

const profileSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {
    selectedProfile: (state, action) => {
        state.profile = action.payload 
    },

   changeProfile: (state, action) => {
    state.profile = {...state.profile, ...action.payload}
   },

   updateFeature: (state,action) =>{
    state.profile.education = action.payload
   },
   

    addFeature: (state, action) => {
      const {type, feature} = action.payload
      switch (type) {
        case 'edu':
          state.profile.education = [feature, ...state.profile.education] 
        break;
        case 'exp':
          state.profile.edu = [feature, ...state.profile.edu] 
        break;
        case 'course':
          state.profile.course = [feature, ...state.profile.course] 
        break;
        default:
        break;  // skill, language, socials, tags
      } 
    },
  },
  extraReducers: (builder) => {
      builder.addCase(getProfiles.fulfilled, (state, action) => {
        //@ts-ignore
        state.profile = action.payload?.length>0 && action.payload[0]
        state.profiles = action.payload
        state.loading = LoadingState.LOADED

      })


      builder.addCase(getProfile.fulfilled, (state, action) => {
        state.profile = action.payload
        state.loading = LoadingState.LOADED
      })


      
      builder.addCase(updateProfile.fulfilled, (state, action) => {
        //@ts-ignore
        state.profile = {...action.payload, ...state.profile}
      })


    
  /** 
    
      builder.addCase(addProfile.fulfilled, (state, action) => {
        state.profile = action.payload
      })

      
      builder.addCase(createEducation.fulfilled, (state, action) => {
        state.profile = [...state.profile, action.payload]
      })
      
      builder.addCase(updateExperience.fulfilled, (state, action) => {
        state.profile = [...state.profile, action.payload]
      })

      builder.addCase(createExperience.fulfilled, (state, action) => {
        state.profile = [...state.profile, action.payload]

      })
      
      builder.addCase(updateExperience.fulfilled, (state, action) => {
        state.profile = [...state.profile, action.payload]

      })

  **/      

  },
})


export const {
  selectedProfile,
  changeProfile,
} = profileSlice.actions

export const selectProfile = createSelector(
    (state: CoreState) => ({
      profiles: state.profiles?.profiles,
      profile: state.profiles?.profile,
      error: state.profiles?.error,
      loading: state.profiles?.loading,
    }),
    (state) => state
  )
export default profileSlice.reducer

 