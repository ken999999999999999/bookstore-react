"use client"
import { Box, Button, Typography } from "@mui/material"
import Loading from "./loading"

import BookPopup from "@/components/BookPopup"
import { useAppDispatch } from "@/redux/hook"
import { popupSlice } from "@/redux/popupSlice"
import dynamic from "next/dynamic"

const BookList = dynamic(() => import("@/components/BookList"), {
  loading: () => <Loading />,
  ssr: false,
})

export default function Home() {
  const dispatch = useAppDispatch()
  return (
    <Box>
      <Typography variant="h4" align="center" mb={5}>
        Bookstore{" - "}
        <Button
          variant="contained"
          onClick={() =>
            dispatch(popupSlice.actions.open({ open: true, book: null }))
          }
        >
          Add Book
        </Button>
      </Typography>
      <BookList />

      <BookPopup />
    </Box>
  )
}
