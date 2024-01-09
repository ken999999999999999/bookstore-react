import { createAppAsyncThunk } from "../createAppAsyncThunk"
import { IBook } from "./bookSlice"

const data: IBook[] = [
  {
    title: "Sed",
    description:
      "Cras eros est, faucibus in dolor efficitur, consequat dignissim nisl. Suspendisse vitae ex egestas, aliquet nisi in, convallis leo. Sed luctus diam eu dui pharetra venenatis. Donec semper rhoncus orci eu convallis.",
    category: "Action and Adventure",
    price: 200,
  },
]

export const fetchBooksAsync = createAppAsyncThunk(
  "books/fetchBooks",
  async () => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1500)
    })

    // The value we return becomes the `fulfilled` action payload
    return data
  }
)
