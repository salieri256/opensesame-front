import type { NextPage } from 'next'
import Head from 'next/head'
import Typography from '@mui/material/Typography';
import Layout from '@/components/Layout'
import ActivityLogList from '@/components/ActivityLogList'
import { useActivityLogs } from '@/libs/api'

const Home: NextPage = () => {
  const { data } = useActivityLogs()

  return (
    <>
      <Head>
        <title>Activity Logs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
      {
        data === undefined ?
        <Typography>Fetching...</Typography> :
        data === null ?
        <Typography>No activity logs</Typography> :
        <ActivityLogList activityLogs={data} />
      }
      </Layout>
    </>
  )
}

export default Home
