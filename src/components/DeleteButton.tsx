"use client"
import { bookSlice } from "@/redux/bookSlice"
import { useAppDispatch } from "@/redux/hook"
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material"
import { useState } from "react"

interface IDeleteButton {
  id: number
  title: string
}

const DeleteButton = ({ id, title }: IDeleteButton) => {
  const [isDeleting, setIsDeleting] = useState(false)
  const dispatch = useAppDispatch()

  return (
    <>
      <Button
        size="small"
        variant="contained"
        color="error"
        onClick={() => setIsDeleting(true)}
      >
        Delete
      </Button>
      <Dialog onClose={() => setIsDeleting(false)} open={isDeleting}>
        <DialogTitle>Are you sure to delete {title} ?</DialogTitle>
        <DialogActions>
          <Button
            autoFocus
            variant="outlined"
            onClick={() => setIsDeleting(false)}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              dispatch(bookSlice.actions.remove(id))
              setIsDeleting(false)
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DeleteButton
