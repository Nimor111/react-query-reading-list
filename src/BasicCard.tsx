import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material'

interface BasicCardProps {
  id: number
  title: string
  author: string
  description: string
}

export default function BasicCard({
  id,
  title,
  author,
  description,
}: BasicCardProps): JSX.Element {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Post {id}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {author}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}
