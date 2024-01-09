import LoadingSkeleton from "@/components/LoadingSkeleton"
import { Grid } from "@mui/material"

export default function Loading() {
  return (
    <Grid container spacing={2} justifyContent="center">
      {[...Array(100)].map((_, index) => (
        <Grid item xs={12} md={4} lg={3} sm={6} key={index + "loading"}>
          <LoadingSkeleton />
        </Grid>
      ))}
    </Grid>
  )
}
