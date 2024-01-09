/* Core */
import { CaseReducer, createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { fetchBooksAsync } from "./bookThunks"

export interface IBook {
  title: string
  description: string
  category: "Action and Adventure" | "Classics" | "ComicBook" | "Horror"
  price: number
}

export interface IUpdateBookDto {
  book: IBook
  index: number
}

export interface IBookSliceState {
  books: IBook[]
  status: "success" | "loading" | "failed"
}

const initialState: IBookSliceState = {
  books: [],
  status: "success",
}

const fetchAll: CaseReducer<IBookSliceState, PayloadAction<IBook[]>> = (
  state,
  action
) => {
  state.books = action.payload
}

const add: CaseReducer<IBookSliceState, PayloadAction<IBook>> = (
  state,
  action
) => {
  state.books = [...state.books, action.payload]
}

const remove: CaseReducer<IBookSliceState, PayloadAction<number>> = (
  state,
  action
) => {
  state.books.splice(action.payload, 1)
}

const edit: CaseReducer<IBookSliceState, PayloadAction<IUpdateBookDto>> = (
  state,
  action
) => {
  state.books.splice(action.payload.index, 1, action.payload.book)
}

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    fetchAll,
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
      })
  },
})
