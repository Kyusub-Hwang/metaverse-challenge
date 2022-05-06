// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useMoralis } from 'react-moralis'
import Login from '../components/Login'
import Header from '../components/Header'
import Messages from '../components/Messages'

// const Home: NextPage = () => {
// ES7 style? No. TS style
export default function Home() {
  const { isAuthenticated, logout } = useMoralis()

  useMoralis

  if (!isAuthenticated) return <Login />

  return (
    <div className="scrollbar-hide h-screen overflow-hidden overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900">
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto max-w-screen-2xl">
        {/* Header */}
        <Header />
        {/* Messages */}
        <Messages />
      </div>
    </div>
  )
}
