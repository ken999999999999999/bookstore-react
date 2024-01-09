/* Instruments */
import { bookSlice } from "./bookSlice"
import { popupSlice } from "./popupSlice"

export const reducer = {
  bookStore: bookSlice.reducer,
  popupStore: popupSlice.reducer,
}
