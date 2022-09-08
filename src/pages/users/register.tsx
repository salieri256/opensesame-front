import UserForm from '@/components/Forms/UserForm'
import { postUser } from '@/libs/api'
import { Button, Container, Stack } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()
  const onCancelClick = () => {
    router.replace('/users')
  }

  return (
    <>
      <Head>
        <title>User registeration</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth="sm" sx={{ pt: 5 }}>
        <Stack spacing={3}>
          <UserForm onSubmit={(data) => {
            postUser(data)
            .then(() => {
              router.replace('/users')
            })
          }} />
          <Button color="inherit" variant="contained" size="large" onClick={onCancelClick}>
            Cancel
          </Button>
        </Stack>
      </Container>
    </>
  )
}

export default Home
