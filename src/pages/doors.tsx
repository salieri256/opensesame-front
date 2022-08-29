import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '@/components/Layout'
import DoorList from '@/components/DoorList'
import { useDoors } from '@/libs/api'

const Home: NextPage = () => {
  const doors = useDoors()

  return (
    <>
      <Head>
        <title>Home | OpenSesame</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
      {
            doors === undefined ? <p>Fetching...</p> : <DoorList doors={doors} />
        }
      </Layout>
    </>
  )
}

export default Home
