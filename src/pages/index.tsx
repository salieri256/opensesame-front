import type { NextPage } from 'next'
import Head from 'next/head'
import UserTable from '../components/UserTable'
import LogTable from '../components/LogTable'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | OpenSesame</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Header />
      </header>

      <main>
        <h2>Users</h2>
        <UserTable />

        <h2>Logs</h2>
        <LogTable />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Home
