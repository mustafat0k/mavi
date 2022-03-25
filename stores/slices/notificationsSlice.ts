import { createSlice, createSelector, Dispatch } from '@reduxjs/toolkit'
import { CoreState } from '../store'

type notificationsState = {
  count: number,
}

const initialState: notificationsState = {
  count: 0,
}

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
     setCount: (state, action) => {
        state.count = action.payload
     }
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
//export const selectnotifications = (state: CoreState) => state.notifications
export const selectnotifications = createSelector(
  (state: CoreState|any) => ({
    count: state.notifications.count,
  }),
  (state) => state
)

export const {
setCount,
} = notificationsSlice.actions


export default notificationsSlice.reducer
