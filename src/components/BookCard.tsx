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
  index: number
}

const BookCard = ({ book, index }: IBookCard) => {
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
          src={`https://picsum.photos/400/200?random=${index}`}
          alt={book.title}
          width={400}
          height={200}
        />
      </CardMedia>
      <CardContent style={{ height: "150px" }}>{book.description}</CardContent>
      <CardActions>
        <Button
          size="small"
          variant="outlined"
          onClick={() =>
            dispatch(popupSlice.actions.open({ book, index, open: true }))
          }
        >
          Edit
        </Button>

        <DeleteButton index={index} title={book.title} />
      </CardActions>
    </Card>
  )
}

export default BookCard
