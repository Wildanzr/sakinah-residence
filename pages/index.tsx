import type { NextPage } from 'next'
import Head from 'next/head'

import { Nav, Hero, Content } from '../components'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col container bg-slate-100 h-screen mx-auto">
      <Head>
        <title className="text-5xl font-bold">Sakinah Residence</title>
        <meta name="description" content="Perumahan Subsidi Sakinah Residence Probolinggo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav>
        <Hero />
        <Content />
      </Nav>
    </div>
  )
}

export default Home
