import type { NextPage } from 'next'
import Head from 'next/head'

import { Nav, Hero, Content, Project, Testimonial, Customer, Map, Contact, Footer, Wrapper } from '../components'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col w-full bg-white h-screen mx-auto">
      <Head>
        <title className="text-5xl font-bold">Sakinah Residence</title>
        <meta name="description" content="Perumahan Subsidi Sakinah Residence Probolinggo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <div className="bg-hero-yellow min-h-full max-h-screen w-full">
          <Hero />
        </div>
          <Content />
        {/* <Project />
        <Testimonial />
        <Customer />
        <Map />
        <Contact />
        <Footer /> */}
      </Wrapper>
    </div>
  )
}

export default Home
