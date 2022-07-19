import type { NextPage } from 'next'
import Head from 'next/head'

import { Nav, Hero, Content, Project, Testimonials } from '../components'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col bg-slate-100 h-screen mx-auto overflow-x-hidden overflow-y-hidden">
      <Head>
        <title className="text-5xl font-bold">Sakinah Residence</title>
        <meta name="description" content="Perumahan Subsidi Sakinah Residence Probolinggo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav>
        <Hero />
        <Content />
        <Project />
        <Testimonials />
      </Nav>
    </div>
  )
}

export default Home
