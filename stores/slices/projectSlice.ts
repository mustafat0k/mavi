import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { CoreState } from 'stores/store'
import { ErrorResponse } from 'stores/types/ErrorResponse'
import api from 'helpers/api'
import {Action} from 'redux';
import {createWrapper, HYDRATE} from 'next-redux-wrapper';

export type Project = {
  name?: string
  first?: string
  last?: string
  email?: string
  bio?: string
}

export type PersistedProject = Project & {
  _id?: string
}


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

type ProjectState = {
  projects: PersistedProject[]
  project: PersistedProject
  apply:  boolean
  loading: LoadingState
  message: any
  isMember: boolean | null
  error?: ErrorResponse | string
  query?: string
  requests?:any
  posts?:any
  accountProjects?:any
  accountLoader?:any
  projectFilters?:any
  selectedProject?:string|number|undefined
}

const initialState: ProjectState = {
  projects: [],
  project: {},
  apply: true,
  isMember: null,
  loading: LoadingState.IDLE,
  error: undefined,
  query:'',
  message:{},
  requests:[],
  posts:[], 
  accountProjects:[],
  projectFilters:[],
  selectedProject:1,
  accountLoader: LoadingState.IDLE 
} as any

/** FILTER **/

export const getProjects = createAsyncThunk<PersistedProject[], void, ThunkConfig>(
  'projects/list',
  async (_, thunkAPI) => {
    try {
      const response = await api.get('/posts')
      return response.data.projects
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: (error as Error).message })
    }
  }
)

export const getProject = createAsyncThunk<PersistedProject[], void, ThunkConfig>(
  'projects/single',
  async (id, thunkAPI) => {
    try {
      const response = await api.get('/posts/'+id)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: (error as Error).message })
    }
  }
) 


/** ACCOUNT **/
// 1
export const getActivities = createAsyncThunk<PersistedProject[], void, ThunkConfig>(
  'projects/getActivities',
  async (id, thunkAPI) => {
    try {
      const response = await api.get('/posts/getActivities')
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: (error as Error).message })
    }
  }
) 

// get projects that i owner 2 
export const getMyProjects = createAsyncThunk<PersistedProject[], void, ThunkConfig>(
  'projects/getMyProjects',
  async (id, thunkAPI) => {
    try {
      const response = await api.get('/posts/getMyProjects')
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: (error as Error).message })
    }
  }
) 

// get projects that i included 3
export const getIncludedProjects = createAsyncThunk<PersistedProject[], void, ThunkConfig>(
  'projects/getProjects',
  async (id, thunkAPI) => {
    try {
      const response = await api.get('/posts/getProjects')
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: (error as Error).message })
    }
  }
) 
// get my draft projects 4
export const getDrafts = createAsyncThunk<PersistedProject[], void, ThunkConfig>(
  'projects/getDrafts',
  async (id, thunkAPI) => {
    try {
      const response = await api.get('/posts/getDrafts')
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: (error as Error).message })
    }
  }
) 

// get pending projects 5
export const getPending = createAsyncThunk<PersistedProject[], void, ThunkConfig>(
  'projects/getPending',
  async (id, thunkAPI) => {
    try {
      const response = await api.get('/posts/getPending')
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: (error as Error).message })
    }
  }
) 

// get my subscribed projects 6
export const getFollows = createAsyncThunk<PersistedProject[], void, ThunkConfig>(
  'projects/getFollows',
  async (id, thunkAPI) => {
    try {
      const response = await api.get('/posts/getFollows')
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: (error as Error).message })
    }
  }
) 

// get my passive status projects 7
export const getPassives = createAsyncThunk<PersistedProject[], void, ThunkConfig>(
  'projects/getPassives',
  async (id, thunkAPI) => {
    try {
      const response = await api.get('/posts/getPassives')
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: (error as Error).message })
    }
  }
) 




/** FORM **/
  
export const createProject = createAsyncThunk<PersistedProject, Project, ThunkConfig>(
    'projects/create',
    async (values: Project, thunkAPI) => {
      try {
        const response = await api.post('/posts', values )
        return response.data
      } catch (error) {
        return thunkAPI.rejectWithValue({ error: (error as Error).message })
      }
    }
)

export const updateProject = createAsyncThunk<PersistedProject, Project, ThunkConfig>(
  'projects/update',
  async (values: Project|any, thunkAPI) => {
    try {
      const response = await api.post('/posts/'+values.id, values.form )
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: (error as Error).message })
    }
  }
)
  
  
  type ApplyVal = {
    to:string,
    requirementId:string
    user:string,
  }
  type Apply = {
    id:string,
    val: ApplyVal
  } 
 
  /** TEAM **/
  
  export const applyProject = createAsyncThunk<PersistedProject[], void, ThunkConfig>(
    'projects/request',
    async ({id,val}:any, thunkAPI) => {
      try {
        const response = await api.post(`/posts/team/request/${id}`, val)
        return response.data
      } catch (error) {
        return thunkAPI.rejectWithValue({ error: (error as Error).message })
      }
    }
  )

  export const removeRequest = createAsyncThunk<PersistedProject[], void, ThunkConfig>(
    'projects/remove-request',
    async (values, thunkAPI) => {
      try {
        //@ts-ignore
        const response = await api.post(`/posts/team/remove/${values.projectId}`)
        return response.data
      } catch (error) {
        return thunkAPI.rejectWithValue({ error: (error as Error).message })
      }
    }
  )

  export const canApply = createAsyncThunk<PersistedProject[], void, ThunkConfig>(
    'projects/canApply',
    async (id, thunkAPI) => {
      try {
        const response = await api.post(`/posts/canApply/${id}`)
        return response.data
      } catch (error) {
        return thunkAPI.rejectWithValue({ error: (error as Error).message })
      }
    }
  )


  export const confirm = createAsyncThunk<PersistedProject[], void, ThunkConfig>(
    'projects/confirm',
    async ({values, id}:any, thunkAPI) => {
      try {
        const response = await api.post(`/posts/team/confirm/${id}`, values )
        return response.data
      } catch (error) {
        return thunkAPI.rejectWithValue({ error: (error as Error).message })
      }
    }
  )
  

  export const reject = createAsyncThunk<PersistedProject[], void, ThunkConfig>(
    'projects/confirm',
    async (id, thunkAPI) => {
      try {
        const response = await api.post(`/posts/team/remove/${id}` )
        return response.data
      } catch (error) {
        return thunkAPI.rejectWithValue({ error: (error as Error).message })
      }
    }
  )
  
  // get my requests
  export const myRequests = createAsyncThunk<PersistedProject[], void, ThunkConfig>(
    'projects/myRequests',
    async (_, thunkAPI) => {
      try {
        const response = await api.post(`/posts/myRequests`)
        return response.data
      } catch (error) {
        return thunkAPI.rejectWithValue({ error: (error as Error).message })
      }
    }
  )
  
  // projects that i joined
  export const joined = createAsyncThunk<PersistedProject[], void, ThunkConfig>(
    'projects/joined',
    async (_, thunkAPI) => {
      try {
        const response = await api.post(`/posts/joined/`)
        return response.data
      } catch (error) {
        return thunkAPI.rejectWithValue({ error: (error as Error).message })
      }
    }
  )
  


const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
 
    updateSelectedProject: (state, action) => {
      state.selectedProject = action.payload
    },
    updateProjectFilter: (state, action) => {
      state.projectFilters = action.payload
    },
    updateAccountProjects: (state, action) => {
      state.accountProjects = action.payload
    },

    setEnt(state, action) {
      return action.payload;
    },
    setQuery: (state, action) => {
      state.query = action.payload
    },
 
    setApply: (state,action) => {
      state.apply = false
    }

  },
     //@ts-ignore
     [HYDRATE]: (state, action) => {
      console.log('HYDRATE', action.payload);
      return {
          ...state,
          ...action.payload.projects,
      }
    },
  extraReducers: (builder) => {
  
      builder.addCase(createProject.pending, (state) => {
        state.loading = LoadingState.LOADING
        delete state.error

      })
  
      builder.addCase(createProject.fulfilled, (state, action) => {
        state.message = 'Project created successfully'
        state.loading = LoadingState.LOADED
        state.project = action.payload
      })
  
      builder.addCase(createProject.rejected, (state, action) => {
        state.error = action.payload?.error
        state.loading = LoadingState.ERROR
      })
  
      //

      builder.addCase(updateProject.pending, (state) => {
        state.loading = LoadingState.LOADING
        delete state.error

      })
  
      builder.addCase(updateProject.fulfilled, (state, action) => {
        state.message = 'Proje başarıyla güncellendi!'
        state.loading = LoadingState.LOADED
        state.project = action.payload
      })
  
      builder.addCase(updateProject.rejected, (state, action) => {
        state.error = action.payload?.error
        //@ts-ignore
        state.message = action.payload?.message
        state.loading = LoadingState.ERROR
      })
  
      // Projects
     builder.addCase(getProjects.pending, (state) => {
        state.projects = []
        state.loading = LoadingState.LOADING
      })
  
      builder.addCase(getProjects.fulfilled, (state, action) => {
        state.projects = action.payload
        state.loading = LoadingState.LOADED
      })
  
      builder.addCase(getProjects.rejected, (state, action) => {
          state.projects = []
        state.loading = LoadingState.ERROR
        state.error = action.payload?.error
      })
      // Project
      builder.addCase(getProject.pending, (state) => {
        state.project = {}
        state.loading = LoadingState.LOADING
      })
  
      builder.addCase(getProject.fulfilled, (state, action) => {
        //@ts-ignore
        state.project = action.payload
        state.loading = LoadingState.LOADED
      })
  
      builder.addCase(getProject.rejected, (state, action) => {
        state.project = {}
        state.loading = LoadingState.ERROR
        state.error = action.payload?.error
      })

      //
      builder.addCase(applyProject.fulfilled, (state, action) => {
          // if success true disable requiremetns
          state.apply = false
          state.message = {}
          // call isRequested for every project show reuqest 
      })

      //
    builder.addCase(confirm.fulfilled, (state, action) => {
      state.loading = LoadingState.LOADED      
    })
    builder.addCase(confirm.pending, (state, action) => {
      state.loading = LoadingState.LOADING      
    })
    builder.addCase(confirm.rejected, (state, action) => {
      state.loading = LoadingState.ERROR
        state.error = action.payload?.error
    })
      //
      builder.addCase(removeRequest.fulfilled, (state, action) => {
        state.isMember = false
      })

      //
      builder.addCase(canApply.fulfilled, (state, action) => {
        const {result,exists, message}:any = action.payload;
        state.message = message
        state.isMember = exists
       
        if(result)
          state.apply = true; // true 
        else
          state.apply = false; 

     })
     builder.addCase(canApply.pending, (state) => {
      state.apply = true; 
      state.message = {}; 

     })
     builder.addCase(canApply.rejected, (state,action) => {
      state.apply = true; 
    })

    // getActivities 1
    builder.addCase(getActivities.fulfilled, (state, action) => {
      state.accountProjects = action.payload
      state.accountLoader = LoadingState.LOADED
    })
    builder.addCase(getActivities.pending, (state) => {
      state.accountLoader = LoadingState.LOADING
    })
    builder.addCase(getActivities.rejected, (state,action) => {
      state.accountLoader = LoadingState.ERROR
    })
    // getMyProjects 2
    builder.addCase(getMyProjects.fulfilled, (state, action) => {
      state.accountProjects = action.payload
      state.accountLoader = LoadingState.LOADED

    })
    builder.addCase(getMyProjects.pending, (state) => {
      state.accountLoader = LoadingState.LOADING
    })
    builder.addCase(getMyProjects.rejected, (state,action) => {
      state.accountLoader = LoadingState.ERROR
    })
    // getIncludedProjects 3
    builder.addCase(getIncludedProjects.fulfilled, (state, action) => {
      state.accountProjects = action.payload
      state.accountLoader = LoadingState.LOADED

    })
    builder.addCase(getIncludedProjects.pending, (state) => {
      state.accountLoader = LoadingState.LOADED
    })
    builder.addCase(getIncludedProjects.rejected, (state,action) => {
      state.accountLoader = LoadingState.ERROR
    })
    // getDrafts 4
    builder.addCase(getDrafts.fulfilled, (state, action) => {
      state.accountProjects = action.payload
      state.accountLoader = LoadingState.LOADED

    })
    builder.addCase(getDrafts.pending, (state) => {
      state.accountLoader = LoadingState.LOADING
    })
    builder.addCase(getDrafts.rejected, (state,action) => {
      state.accountLoader = LoadingState.ERROR
    })
    // getPending 5
    builder.addCase(getPending.fulfilled, (state, action) => {
      state.accountProjects = action.payload
      state.accountLoader = LoadingState.LOADED

    })
    builder.addCase(getPending.pending, (state) => {
      state.accountLoader = LoadingState.LOADING
    })
    builder.addCase(getPending.rejected, (state,action) => {
      state.accountLoader = LoadingState.ERROR
    })
    // getFollows 6
    builder.addCase(getFollows.fulfilled, (state, action) => {
      state.accountProjects = action.payload
      state.accountLoader = LoadingState.LOADED

    })
    builder.addCase(getFollows.pending, (state) => {
      state.accountLoader = LoadingState.LOADING
    })
    builder.addCase(getFollows.rejected, (state,action) => {
      state.accountLoader = LoadingState.ERROR
    })
    // getPassives 7
    builder.addCase(getPassives.fulfilled, (state, action) => {
      state.accountProjects = action.payload
      state.accountLoader = LoadingState.LOADED

    })
    builder.addCase(getPassives.pending, (state) => {
      state.accountLoader = LoadingState.LOADING

    })
    builder.addCase(getPassives.rejected, (state,action) => {
      state.accountLoader = LoadingState.ERROR
    })

    // myRequests
    builder.addCase(myRequests.fulfilled, (state, action) => {
      state.requests = action.payload
    })
    builder.addCase(myRequests.pending, (state) => {
    })
    builder.addCase(myRequests.rejected, (state,action) => {
    })
    // joined
    builder.addCase(joined.fulfilled, (state, action) => {
      state.requests = action.payload
    })
    builder.addCase(joined.pending, (state) => {
    })
    builder.addCase(joined.rejected, (state,action) => {
    })

  },
})


export const {
  setQuery,
  setApply,
  updateSelectedProject,
  updateProjectFilter,
  updateAccountProjects,
} = projectsSlice.actions

export const selectProjects = createSelector(
    (state: CoreState) => ({
     projects: state.projects?.projects,
     message: state.projects?.message,
     project: state.projects?.project,
     loading: state.projects?.loading,
     error: state.projects?.error,
     query: state.projects?.query,
     isMember: state.projects?.isMember,
     apply: state.projects?.apply, // its about is can project send request or not
     selectedProject: state.projects.selectedProject,
     accountProjects: state.projects.accountProjects,
     accountLoader: state.projects.accountLoader,
     requests: state.projects.requests,

    }),
    (state) => state
  )
export default projectsSlice.reducer



/*** REQUIREMENT (GİRİŞİM KURULUM ŞEMASI) ***/

// create requirement
// update requirement
// List requirement
// Single requirement

/*** FOLLOWMENT ***/

// follow
// unfollow
// projectFollowers
// projectFollowings
// isFollow


/*** LIKE SYSTEM ***/

//toggleLike
//toggleDislike

/*** TEAM MEMBERSHIP ***/
// members
// invate members
// accept member
// decline member
// exclude member 
// block a member 

