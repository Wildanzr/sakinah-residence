import type { NextPage } from 'next'
import Head from 'next/head'

import { Nav, Hero } from '../components'

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
        <div className="flex bg-hero-home bg-center h-[481px] w-full justify-center py-2">
          <p className="font-thin text-3xl">Meow</p>
        </div>
      </Nav>
    </div>
  )
}

export default Home
