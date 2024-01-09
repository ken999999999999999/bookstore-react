"use client"
import { ReactNode, useRef } from "react"
import { Provider } from "react-redux"
import { AppStore, reduxStore } from "./store"
import { fetchBooksAsync } from "./bookSlice/bookThunks"

const ReduxProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    storeRef.current = reduxStore()
    storeRef.current.dispatch(fetchBooksAsync())
  }

  return <Provider store={storeRef.current}>{children} </Provider>
}

export default ReduxProvider
