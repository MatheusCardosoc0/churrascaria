import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/LayoutElements/About'
import Header from '../components/LayoutElements/Header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <About />
    </div>
  )
}

export default Home
