import UserList from '@/components/UserList'
import { deleteUser, useUser } from '@/libs/api'
import { Button, Container, Stack, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()
  const userId = Number(router.query.id)
  const onDeleteClick = (userId: number) => {
    deleteUser(userId)
    .then(() => {
        router.replace('/users')
    })
  }
  const onCancelClick = () => {
    router.replace('/users')
  }
  const { data } = useUser(userId)

  return (
    <>
      <Head>
        <title>User delete</title>
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
            <UserList users={[data]} />
          }
          <Button color="error" variant="contained" size="large" onClick={() => onDeleteClick(userId)}>
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
