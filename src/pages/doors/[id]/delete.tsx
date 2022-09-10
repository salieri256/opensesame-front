import DoorList from '@/components/DoorList'
import { deleteDoor, useDoor } from '@/libs/api'
import { Button, Container, Stack, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()
  const doorId = Number(router.query.id)
  const onDeleteClick = (doorId: number) => {
    deleteDoor(doorId)
    .then(() => {
        router.replace('/doors')
    })
  }
  const onCancelClick = () => {
    router.replace('/doors')
  }
  const { data } = useDoor(doorId)

  return (
    <>
      <Head>
        <title>Door delete</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth="sm" sx={{ pt: 5 }}>
        <Stack spacing={3}>
          <Typography>Delete?</Typography>
          {
            data === undefined ?
            <Typography>Fetching...</Typography> :
            data === null ?
            <Typography>No users</Typography> :
            <DoorList doors={[data]} />
          }
          <Button color="error" variant="contained" size="large" onClick={() => onDeleteClick(doorId)}>
            Delete
          </Button>
          <Button color="inherit" variant="contained" size="large" onClick={onCancelClick}>
            Cancel
          </Button>
        </Stack>
      </Container>
    </>
  )
}

export default Home
