"use client"
import { Box, Button, Typography } from "@mui/material"
import { Suspense } from "react"
import Loading from "./loading"
import BookList from "@/components/BookList"
import BookPopup from "@/components/BookPopup"
import { useAppDispatch } from "@/redux/hook"
import { popupSlice } from "@/redux/popupSlice"

export default function Home() {
  const dispatch = useAppDispatch()
  return (
    <Box>
      <Typography variant="h4" align="center" mb={5}>
        Bookstore{" - "}
        <Button
          variant="contained"
          onClick={() =>
            dispatch(
              popupSlice.actions.open({ open: true, book: null, index: -1 })
            )
          }
        >
          Add Book
        </Button>
      </Typography>
      <Suspense fallback={<Loading />}>
        <BookList />
      </Suspense>
      <BookPopup />
    </Box>
  )
}
