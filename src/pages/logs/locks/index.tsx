import type { NextPage } from 'next'
import Head from 'next/head'
import Typography from '@mui/material/Typography';
import Layout from '@/components/Layout'
import LockLogList from '@/components/LockLogList'
import { useLockLogs } from '@/libs/api'

const Home: NextPage = () => {
  const lockLogs = useLockLogs()

  return (
    <>
      <Head>
        <title>Lock Logs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
      {
        lockLogs.data === undefined ? <Typography>Fetching...</Typography> : <LockLogList lockLogs={lockLogs.data} />
      }
      </Layout>
    </>
  )
}

export default Home
