/* Core */
import { CaseReducer, createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { IBook } from "../bookSlice/bookSlice"

export interface IPopupSliceState {
  open: boolean
  book: IBook | null
  index: number
}

const initialState: IPopupSliceState = {
  open: false,
  book: null,
  index: -1,
}

const close: CaseReducer<IPopupSliceState> = (state) => {
  state.open = false
  state.book = null
  state.index = -1
}

const open: CaseReducer<IPopupSliceState, PayloadAction<IPopupSliceState>> = (
  state,
  action
) => {
  state.open = true
  state.book = action.payload.book
  state.index = action.payload.index
}

export const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    open,
    close,
  },
})
