import { createSlice, createSelector, Dispatch } from '@reduxjs/toolkit'
import { CoreState } from '../store'

type GeneralState = {
  value?: number,
  body?: boolean,
  // forms 
  form:Object, 
  status:boolean,
  modalType?: string
  modalSettings?: object
  modalStatus?: boolean
  popupStatus?: boolean
  modalValues?: object
  // drawers
  drawerType?: string
  drawerStatus?: boolean
  drawerValues?: object
  features?:any
  skills?: any
  langs?: any
  images?:any
  tags?: object[],
}

const initialState: GeneralState = {
  value: 0,
  body:false,
  form:{},
  status:false,
  modalType:'',
  modalStatus:false,
  popupStatus:false,
  modalValues:{},
  modalSettings:{},
  drawerType:'',
  drawerStatus:false, 
  drawerValues:{}, 
  features:[],
  skills:[
    {name:'Logic Pro',star:3, description:'Mix Mastering'},
    {name:'Eifel Studio',star:5, description:'Beat Maker'}
  ],
  langs:[],
  images:[],
  tags:[],
}

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    
    // add feature
    updateFeature: (state, action) => {
      state.features = action.payload
    },
    
    removeFeature: (state, action) => {
      let newFeatures = state.features?.filter((f:any)=>f.code != action.payload)
      state.features = newFeatures
    },

    updateForm: (state, action) => {
      state.form = action.payload
    },
    
    // add skills   
    addSkill: (state, action) => {
      state.skills = [action.payload, ...state.skills]
    }, 

    updateSkills: (state, action) => {
      state.skills = action.payload
    },
    
    removeSkills: (state, action) => {
      let newSkills = state.skills?.filter((f:any)=>f.type != action.payload)
      state.skills = newSkills
    },

      // add langs  
      addLang: (state, action) => {
        state.langs = [action.payload, ...state.langs]
      }, 
  
      updateLangs: (state, action) => {
        state.langs = action.payload
      },
      removeLang: (state, action) => {
        let newlangs = state.langs?.filter((f:any)=>f.title != action.payload)
        state.langs = newlangs
      },
      removeLangs: (state, action) => {
        let newlangs = state.langs?.filter((f:any)=>f.type != action.payload)
        state.langs = newlangs
      },

      
  addField: (state, action) => {
    //@ts-ignore
    state.fields = [...action.payload, ...state.fields] 
  },
  updateImages: (state, action) => {
    state.images = action.payload
  },
  toggleDefaultImages: (state, action) => {
    let newImages = [...state.images]
    newImages.map(img=>{
      img.default = false;
    })
    let image = newImages.find(img=>img.path === action.payload) 
    let index = newImages.findIndex(img=>img.path === action.payload) 
    // @ts-ignore
    newImages.splice(index,1)
    newImages.push({...image, default:true} )
    state.images = newImages;
  },
  removeImage: (state, action) => {
    let newImages = state.images?.filter((f:any)=>f.path != action.payload)
    state.images = newImages
  },

  addImages: (state, action) => {
    state.images = [ action.payload, ...state.images]
  },

    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    setModalStatus: (state,action) => {
      state.modalStatus = action.payload||false
    },
    setPopupStatus: (state,action) => {
      state.popupStatus = action.payload||false
    },
 

    openModal: (state, action) => {
        state.modalStatus = true
        state.modalType = action.payload.type 
        state.modalValues = {...action.payload.values, settings: action.payload.settings}
    },
    setModal: (state, action) => {
      state.modalSettings = action.payload 
  },
       
    closeModal: (state) => {
      state.modalStatus = false 
      state.modalType = '' 
    },
    openDrawer: (state, action) => {
        state.drawerType = action.payload.type 
        state.drawerValues = action.payload.values
        state.drawerStatus = true
    },
        
    closeDrawer: (state) => {
      state.drawerStatus = false 
      state.drawerType = '' 
    },


    toggleStatus: (state) => {
      state.status = !state.status 
  },
    toggleBody: (state) => {
        state.body = !state.body 
    },
    increment: (state) => {
        if(state.value && isNumber(state.value)){
            state.value += 1
        }
    },
    decrement: (state) => {
        if(typeof state.value === 'number' && !isNaN(state.value) ){
            state.value -= 1
        }
    },
    reset: (state) => {
      state.value = 0
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    
      
  },
})

export function isNumber(data:any) {
    return (typeof data === 'number' && !isNaN(data));
}

/**
 * Extract count from root state
 *
 * @param   {Object} state The root state
 * @returns {number} The current count
 */
//export const selectGeneral = (state: CoreState) => state.general
export const selectGeneral = createSelector(
  (state: CoreState) => ({
    general: state.general,
    body: state.general.body, 
    status: state.general.status, 
    modalType: state.general.modalType,
    modalValues: state.general.modalValues,
    modalStatus: state.general.modalStatus,
    popupStatus: state.general.popupStatus,
    modalSettings: state.general.modalSettings,
    drawerType: state.general.drawerType,
    drawerStatus: state.general.drawerStatus,
    drawerValues: state.general.drawerValues,
    features: state.general.features,
    skills: state.general.skills,
    langs: state.general.langs,
    images: state.general.images,
  
  }),
  (state) => state
)

export const {
  setModalStatus,
  setPopupStatus,
  toggleStatus,
  toggleBody,
  openModal,
  setModal,
  closeModal,
  openDrawer,
  closeDrawer,
  increment,
  decrement,
  reset,
  incrementByAmount, 
  addField,
  updateFeature,
  removeFeature,
  addSkill,
  updateSkills,
  removeSkills,
  addLang,
  updateLangs,
  removeLang,
  removeLangs,
  updateImages,
  removeImage,
  addImages,
  toggleDefaultImages

} = generalSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount: number) => (dispatch: Dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}

export default generalSlice.reducer
