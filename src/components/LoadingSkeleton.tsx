import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Skeleton,
} from "@mui/material"

const LoadingSkeleton = (): JSX.Element => (
  <Card style={{ maxWidth: "400px", margin: "0px auto" }}>
    <CardHeader title={<Skeleton />} subheader={<Skeleton width="40%" />} />
    <CardMedia>
      <Skeleton variant="rectangular" width="100%" height={200} />
    </CardMedia>
    <CardContent>
      <Skeleton />
      <Skeleton width="80%" />
      <Skeleton width="60%" />
    </CardContent>
  </Card>
)

export default LoadingSkeleton
