import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '@/components/Layout'
import LockLogList from '@/components/LockLogList'
import { useLockLogs } from '@/libs/api'

const Home: NextPage = () => {
  const lockLogs = useLockLogs()

  return (
    <>
      <Head>
        <title>Home | OpenSesame</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
      {
            lockLogs === undefined ? <p>Fetching...</p> : <LockLogList lockLogs={lockLogs} />
        }
      </Layout>
    </>
  )
}

export default Home
