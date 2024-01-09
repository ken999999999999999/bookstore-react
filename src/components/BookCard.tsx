"use client"
import { IBook } from "@/redux/bookSlice/bookSlice"
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
} from "@mui/material"
import Image from "next/image"
import DeleteButton from "./DeleteButton"
import { useAppDispatch } from "@/redux/hook"
import { popupSlice } from "@/redux/popupSlice"

interface IBookCard {
  book: IBook
}

const BookCard = ({ book }: IBookCard) => {
  const dispatch = useAppDispatch()
  return (
    <Card style={{ maxWidth: "400px", margin: "0px auto" }}>
      <CardHeader
        title={book.title}
        subheader={`CAD $${book.price?.toFixed(2)}`}
        action={
          <Chip label={book.category} color="primary" variant="outlined" />
        }
      />
      <CardMedia>
        <Image
          loading="eager"
          src={`https://picsum.photos/400/200?random=${book.id}`}
          alt={book.title}
          width={400}
          height={200}
        />
      </CardMedia>
      <CardContent style={{ height: "150px", overflowY: "auto" }}>
        {book.description}
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="outlined"
          onClick={() =>
            dispatch(popupSlice.actions.open({ book, open: true }))
          }
        >
          Edit
        </Button>

        <DeleteButton id={book.id} title={book.title} />
      </CardActions>
    </Card>
  )
}

export default BookCard
