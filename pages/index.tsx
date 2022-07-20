import type { NextPage } from 'next'
import Head from 'next/head'

import { Hero, Content, Project, Testimonial, Customer, Map, Contact, Footer, Wrapper } from '../components'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col w-full bg-white h-screen mx-auto">
      <Head>
        <title className="text-5xl font-bold">Sakinah Residence</title>
        <meta name="description" content="Perumahan Subsidi Sakinah Residence Probolinggo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <div className="flex bg-hero-yellow min-h-full max-h-screen w-full">
          <Hero />
        </div>

        <div className="flex bg-hero-home bg-cover bg-center max-h-[70vh] w-full">
          <Content />
        </div>

        <div className="flex w-full bg-white items-center">
          <Project />
        </div>

        <div className="flex w-full bg-white">
          <Testimonial />
        </div>

        <div className="flex w-full bg-[#E7AC29]">
          <Customer />
        </div>

        <div className="flex w-full bg-white min-h-[400px]">
          <Map />
        </div>

        <div className="flex w-full bg-black">
          <Contact />
        </div>

        <div className="flex w-full bg-[#242F30]">
          <Footer />
        </div>

      </Wrapper>
    </div>
  )
}

export default Home
