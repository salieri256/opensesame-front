import DoorForm from '@/components/Forms/DoorForm'
import { postDoor } from '@/libs/api'
import { Button, Container, Stack } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()
  const onCancelClick = () => {
    router.replace('/doors')
  }

  return (
    <>
      <Head>
        <title>Home | OpenSesame</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth="sm" sx={{ pt: 5 }}>
        <Stack spacing={3}>
          <DoorForm onSubmit={(data) => {
            postDoor(data)
            .then(() => {
              router.replace('/doors')
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
