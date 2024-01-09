"use client"
import { IBook, bookSlice } from "@/redux/bookSlice/bookSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hook"
import { popupSlice, selectPopup } from "@/redux/popupSlice/popupSelector"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material"
import { useCallback, useEffect } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"

const BookPopup = () => {
  const { open, book } = useAppSelector(selectPopup)
  const dispatch = useAppDispatch()

  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IBook>()

  const onSubmit: SubmitHandler<IBook> = useCallback(
    (value) => {
      if (!book) {
        dispatch(bookSlice.actions.add(value))
      } else {
        dispatch(bookSlice.actions.edit(value))
      }
      dispatch(popupSlice.actions.close())
    },

    [book, dispatch]
  )

  useEffect(() => {
    if (open)
      book
        ? reset(book)
        : reset({
            id: 0,
            title: "",
            description: "",
            category: "Action and Adventure",
            price: 0,
          })
  }, [open, book, reset])

  return (
    <Dialog open={open} maxWidth="lg">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <DialogTitle>
          {book ? `Edit ${book?.title}` : "Add new book"}
        </DialogTitle>
        <DialogContent style={{ padding: "10px" }}>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  value={field.value}
                  label="Category"
                  onChange={field.onChange}
                >
                  {[
                    "Action and Adventure",
                    "Classics",
                    "ComicBook",
                    "Horror",
                  ].map((value) => (
                    <MenuItem key={value} value={value}>
                      {value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Title"
            autoFocus
            {...register("title", {
              required: { value: true, message: "Title is required" },
              maxLength: { value: 20, message: "Max Length is 20" },
            })}
            error={!!errors?.title}
            helperText={errors?.title?.message ?? ""}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Price"
            type="number"
            {...register("price", {
              required: { value: true, message: "Price is required" },
              max: { value: 2000, message: "Max price is $2000" },
              min: { value: 0.1, message: "Min price is $0.1" },
              valueAsNumber: true,
            })}
            error={!!errors?.price}
            helperText={errors?.price?.message ?? ""}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Description"
            multiline
            minRows={4}
            maxRows={8}
            {...register("description", {
              required: { value: true, message: "Description is required" },
              maxLength: { value: 1000, message: "Max Length is 1000" },
            })}
            error={!!errors?.description}
            helperText={errors?.description?.message ?? ""}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            onClick={() => dispatch(popupSlice.actions.close())}
          >
            Cancel
          </Button>
          <Button variant="contained" type="submit">
            {!book ? "Add" : "Edit"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default BookPopup
