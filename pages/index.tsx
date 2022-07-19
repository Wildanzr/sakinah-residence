import type { NextPage } from 'next'
import Head from 'next/head'

import { Nav, Hero, Content, Project, Testimonial, Customer } from '../components'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col bg-white h-screen mx-auto">
      <Head>
        <title className="text-5xl font-bold">Sakinah Residence</title>
        <meta name="description" content="Perumahan Subsidi Sakinah Residence Probolinggo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav>
        <Hero />
        <Content />
        <Project />
        <Testimonial />
        <Customer />
      </Nav>
    </div>
  )
}

export default Home
