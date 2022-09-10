import type { NextPage } from 'next'
import Head from 'next/head'
import Typography from '@mui/material/Typography';
import Layout from '@/components/Layout'
import LockLogList from '@/components/LockLogList'
import { useLockLogs } from '@/libs/api'

const Home: NextPage = () => {
  const { data } = useLockLogs()

  return (
    <>
      <Head>
        <title>Lock Logs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
      {
        data === undefined ?
        <Typography>Fetching...</Typography> :
        data === null ?
        <Typography>No lock logs</Typography> :
        <LockLogList lockLogs={data} />
      }
      </Layout>
    </>
  )
}

export default Home
