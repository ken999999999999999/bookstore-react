/* Core */
import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit"
import { reducer } from "./rootReducer"

export const reduxStore = () => configureStore({ reducer })

export type AppStore = ReturnType<typeof reduxStore>
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]
export type AppThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>
