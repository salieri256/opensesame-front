import type { NextPage } from 'next'
import Head from 'next/head'
import { Typography, Button, Stack } from '@mui/material'
import Layout from '@/components/Layout'
import UserList from '@/components/UserList'
import { useUsers } from '@/libs/api'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const { data } = useUsers()
  const router = useRouter()
  const onRegisterClick = () => {
    router.replace('/users/register')
  }

  return (
    <>
      <Head>
        <title>Users</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Stack spacing={3}>
        {
          data === undefined ?
          <Typography>Fetching...</Typography> : 
          <>
          {
            data === null ?
            <Typography>No users</Typography> :
            <UserList users={data} />
          }
          <Button color="primary" variant="contained" size="large" onClick={onRegisterClick}>Add user</Button>
          </>
        }
        </Stack>
      </Layout>
    </>
  )
}

export default Home
