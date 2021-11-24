import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Container,
  Grid,
  Paper,
  Typography,
} from '@mui/material'
import RestoreIcon from '@mui/icons-material/Restore'
import FavoriteIcon from '@mui/icons-material/Favorite'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { useQuery } from 'react-query'
import BasicCard from './BasicCard'

interface Post {
  id: number
  title: string
  author: string
  description: string
}

async function fetchPosts(): Promise<Post[]> {
  return fetch('http://localhost:8000/posts').then((res) => res.json())
}

export default function PostGrid(): JSX.Element {
  const { isLoading, error, data } = useQuery<Post[], Error>(
    'posts',
    fetchPosts
  )

  if (isLoading) {
    return (
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Typography variant="h2">Loading...</Typography>
        </Box>
      </Container>
    )
  }

  if (error) {
    return (
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Typography variant="h2">
            An error has occurred: {error.message}
          </Typography>
        </Box>
      </Container>
    )
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2">React reading list</Typography>
        <Grid container spacing={4} sx={{ my: 0 }}>
          {data?.map((post: Post) => (
            <Grid item xs={4}>
              <BasicCard
                id={post.id}
                title={post.title}
                author={post.author}
                description={post.description}
              />
            </Grid>
          ))}
        </Grid>
        <Paper
          sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation showLabels value={0} onChange={() => { }}>
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
          </BottomNavigation>
        </Paper>
      </Box>
    </Container>
  )
}
