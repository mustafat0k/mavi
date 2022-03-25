import React from 'react'
import { createSlice, createSelector, Dispatch } from '@reduxjs/toolkit'
import { CoreState } from '../store'
type NoteState = {
    value?: number,
    notes?: any,
    note?: any,
}

const initialState: NoteState = {
    value: 0,
    notes: [],
    note: {},

}

const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        updateNote: (state, action) => {
            const { id, value } = action.payload;
            const index = state.notes.findIndex((item: any) => item._id == id)
            let newNotes = [...state.notes]
            newNotes.splice(index, 1, value)
            state.notes = newNotes;
        },
        createNote: (state, action) => {
            state.note = action.payload
        },
    },
})

export function isNumber(data: any) {
    return (typeof data === 'number' && !isNaN(data));
}

/**
 * Extract count from root state
 *
 * @param   {Object} state The root state
 * @returns {number} The current count
 */
//export const selectNote = (state: CoreState) => state.note
export const selectNote = createSelector(
    (state: CoreState|any) => ({
        note: state.note,
        notes: state.notes,
    }),
    (state) => state
)

export const {
    updateNote,
    createNote,
} = noteSlice.actions

export default noteSlice.reducer
