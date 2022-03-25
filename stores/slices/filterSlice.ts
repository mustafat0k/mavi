import { createSlice, createSelector, Dispatch } from '@reduxjs/toolkit'
import { CoreState } from '../store'


type FilterState = {
  page?:any
  query?:string
  error?:any
  loading?:boolean
  tags?:any
  profiles?:any
  professions?:any
  list?:any

}

const initialState: FilterState = {
  page:0,
  error:{},
  loading:false,
  query:'',
  list:[],
  tags:[],
  profiles:{},
  professions:[],
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setList: (state,action) =>{
      state.list = action.payload
    },
    setQuery: (state,action) =>{
      state.query = action.payload
    },
    setPage: (state,action) =>{
      state.page = action.payload
    },
    incrementPage: (state) =>{
      state.page = state.page+1
      console.log('state.page', state.page)
    },
    decrementPage: (state) =>{
      state.page = state.page-1
    },
    setError: (state,action) =>{
      state.error = action.payload
    },
    setLoading: (state,action) =>{
      state.loading = action.payload
    },
    updateTags: (state,action) =>{
        state.tags = action.payload
    },
    updateProfiles: (state,action) =>{
        state.profiles = action.payload
    },
    updateProfessions: (state,action) =>{
        state.professions = action.payload
    },
    updateFilterProfessions: (state,action) =>{
        state.professions = action.payload
    },

    reset: (state) =>{
        state.list = []
        state.tags = []
        state.professions = []
        state.profiles = []
        state.query = ''
        state.page = 0
    },
      
  },
})
 

/**
 * Extract count from root state
 *
 * @param   {Object} state The root state
 * @returns {number} The current count
 */
//export const selectFilter = (state: CoreState) => state.filter
export const selectFilter = createSelector(
  (state: CoreState) => ({
    page: state.filter.page,
    query: state.filter.query,
    tags: state.filter.tags,
    profiles: state.filter.profiles,
    professions: state.filter.professions,
    selectedProfessions: state.filter.professions,
    list: state.filter.list,
  }),
  (state) => state
)

export const {
    setList,
    setPage,
    incrementPage,
    decrementPage,
    setQuery,
    setError,
    setLoading,
    updateProfiles,
    updateTags,
    updateProfessions,
    updateFilterProfessions,
} = filterSlice.actions


export default filterSlice.reducer

export const incrementAsync = (count: number=1) => (dispatch: Dispatch) => {
  setTimeout(() => {
    dispatch(incrementPage())
  }, 1000)
}
