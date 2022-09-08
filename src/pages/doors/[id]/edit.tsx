import DoorForm from '@/components/Forms/DoorForm'
import { putDoor, useDoor } from '@/libs/api'
import { Button, Container, Stack } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()
  const onCancelClick = () => {
    router.replace('/doors')
  }

  const doorId = Number(router.query.id)
  const { data } = useDoor(doorId)

  return (
    <>
      <Head>
        <title>Door registeration</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth="sm" sx={{ pt: 5 }}>
        <Stack spacing={3}>
          {
            data === undefined ?
            <></> :
            <DoorForm
            defaultValues={{
              name: data?.name,
            }}
            onSubmit={(data) => {
              putDoor(doorId, data)
              .then(() => {
                router.replace('/doors')
              })
            }} />
          }
          <Button color="inherit" variant="contained" size="large" onClick={onCancelClick}>
            Cancel
          </Button>
        </Stack>
      </Container>
    </>
  )
}

export default Home
