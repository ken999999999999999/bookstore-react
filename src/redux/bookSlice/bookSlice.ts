/* Core */
import { CaseReducer, createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { fetchBooksAsync } from "./bookThunks"

export interface IBook {
  id: number
  title: string
  description: string
  category: "Action and Adventure" | "Classics" | "ComicBook" | "Horror"
  price: number
}

export interface IBookSliceState {
  books: IBook[]
  status: "success" | "loading" | "failed"
  idCount: number
}

const initialState: IBookSliceState = {
  books: [],
  status: "success",
  idCount: 0,
}

const add: CaseReducer<IBookSliceState, PayloadAction<IBook>> = (
  state,
  action
) => {
  state.idCount++
  const newBook = { ...action.payload, id: state.idCount }
  state.books = [newBook, ...state.books]
}

const remove: CaseReducer<IBookSliceState, PayloadAction<number>> = (
  state,
  action
) => {
  const index = state.books.findIndex((item) => item.id === action.payload)
  state.books.splice(index, 1)
}

const edit: CaseReducer<IBookSliceState, PayloadAction<IBook>> = (
  state,
  action
) => {
  const index = state.books.findIndex((item) => (item.id = action.payload.id))
  state.books.splice(index, 1, action.payload)
}

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    add,
    remove,
    edit,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksAsync.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchBooksAsync.fulfilled, (state, action) => {
        state.status = "success"
        state.books = action.payload
        state.idCount = action.payload.length
      })
  },
})
