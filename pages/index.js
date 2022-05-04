// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useMoralis } from 'react-moralis'
import Login from '../components/Login'

// const Home: NextPage = () => {
// ES7 style? No. TS style
export default function Home() {
  const { isAuthenticated, logout } = useMoralis()

  useMoralis

  if (!isAuthenticated) return <Login />

  return (
    <div className="h-screen">
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Welcome page</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
