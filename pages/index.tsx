import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import WhatsApp from '../public/images/whatsapp.png'
import HeroHome from '../public/images/bg-1.jpg'

import { SwiperHero, Content, Project, Testimonial, Customer, Map, Contact, Footer, Wrapper } from '../components'

const Home: NextPage = () => {
  const whatsAppChat = () => {
    window.open(
      'https://wa.me/6285736822725?text=Hallo%0ASaya%20ingin%20tahu%20informasi%20lebih%20lanjut%20tentang%20Sakinah%20Residence',
      '_blank'
    )
  }

  if (typeof window !== 'undefined') {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()

        document.querySelector(this?.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        })
      })
    })
  }
  return (
    <div className="flex flex-col w-full bg-white h-screen mx-auto scroll-smooth">
      <Head>
        <title className="text-5xl font-bold">Sakinah Residence</title>
        <meta name="description" content="Perumahan Subsidi Sakinah Residence Probolinggo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <div className="flex min-h-full max-h-screen w-full">
          <SwiperHero />
        </div>

        <div className="flex bg-no-repeat min-h-[70vh] w-full" style={{ background: `url(${HeroHome.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <Content />
        </div>

        <div className="flex w-full bg-white items-center">
          <Project />
        </div>

        <div className="flex w-full bg-slate-100">
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

        <button onClick={whatsAppChat} title="Contact Us"
        className="fixed z-40 bottom-8 right-8 bg-blue-600 w-12 h-12 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce duration-300">
          <Image src={WhatsApp} alt="WhatsApp" className='w-full h-full' />
        </button>

      </Wrapper>
    </div>
  )
}

export default Home
