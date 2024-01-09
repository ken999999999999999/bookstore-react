import { RootState } from "../store"
export { popupSlice } from "./popupSlice"

export const selectPopup = (state: RootState) => state.popupStore
