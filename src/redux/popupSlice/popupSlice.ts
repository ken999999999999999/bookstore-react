/* Core */
import { CaseReducer, createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { IBook } from "../bookSlice/bookSlice"

export interface IPopupSliceState {
  open: boolean
  book: IBook | null
}

const initialState: IPopupSliceState = {
  open: false,
  book: null,
}

const close: CaseReducer<IPopupSliceState> = (state) => {
  state.open = false
  state.book = null
}

const open: CaseReducer<IPopupSliceState, PayloadAction<IPopupSliceState>> = (
  state,
  action
) => {
  state.open = true
  state.book = action.payload.book
}

export const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    open,
    close,
  },
})
