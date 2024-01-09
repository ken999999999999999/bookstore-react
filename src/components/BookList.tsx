"use client"
import { selectBooks } from "@/redux/bookSlice/bookSelector"

import { useAppSelector } from "@/redux/hook"
import { Grid } from "@mui/material"
import BookCard from "./BookCard"

interface IBooks {}

const BookList = ({}: IBooks) => {
  const bookStore = useAppSelector(selectBooks)
  if (bookStore.status === "loading") throw Promise.resolve()
  if (bookStore.status === "success")
    return (
      <Grid container spacing={2} justifyContent="center">
        {bookStore.books.map((book, index) => (
          <Grid item xs={12} md={4} lg={3} sm={6} key={book.title}>
            <BookCard book={book} />
          </Grid>
        ))}
      </Grid>
    )
}

export default BookList
