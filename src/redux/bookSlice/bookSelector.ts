import { RootState } from "../store"
export { bookSlice } from "./bookSlice"

export const selectBooks = (state: RootState) => state.bookStore
