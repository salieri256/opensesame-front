import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '@/components/Layout'
import ActivityLogList from '@/components/ActivityLogList'
import { useActivityLogs } from '@/libs/api'

const Home: NextPage = () => {
  const activityLogs = useActivityLogs()

  return (
    <>
      <Head>
        <title>Home | OpenSesame</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
      {
            activityLogs === undefined ? <p>Fetching...</p> : <ActivityLogList activityLogs={activityLogs} />
        }
      </Layout>
    </>
  )
}

export default Home
