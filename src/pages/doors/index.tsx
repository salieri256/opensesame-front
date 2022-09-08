import type { NextPage } from 'next'
import Head from 'next/head'
import { Typography, Button, Stack } from '@mui/material'
import Layout from '@/components/Layout'
import DoorList from '@/components/DoorList'
import { useDoors } from '@/libs/api'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const { data } = useDoors()
  const router = useRouter()
  const onRegisterClick = () => {
    router.replace('/doors/register')
  }

  return (
    <>
      <Head>
        <title>Doors</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Stack spacing={3}>
        {
          data === undefined ?
          <Typography>Fetching...</Typography> :
          <>
            <DoorList doors={data} />
            <Button color="primary" variant="contained" size="large" onClick={onRegisterClick}>Add door</Button>
          </>
        }
        </Stack>
      </Layout>
    </>
  )
}

export default Home
