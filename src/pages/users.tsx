import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '@/components/Layout'
import UserList from '@/components/UserList'
import { useUsers } from '@/libs/api'

const Home: NextPage = () => {
  const users = useUsers()

  return (
    <>
      <Head>
        <title>Home | OpenSesame</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {
            users === undefined ? <p>Fetching...</p> : <UserList users={users} />
        }
      </Layout>
    </>
  )
}

export default Home
