import type { NextPage } from 'next'
import Head from 'next/head'

import { SwiperHero, Content, Project, Testimonial, Customer, Map, Contact, Footer, Wrapper, Hero1, Hero2 } from '../components'

const Home: NextPage = () => {
  const whatsAppChat = () => {
    window.open(
      'https://wa.me/6282331424705?text=Hallo%0ASaya%20ingin%20tahu%20informasi%20lebih%20lanjut%20tentang%20Sakinah%20Residence',
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
        <title className="text-5xl font-bold">Sakinah Residence | Rumah Sehat Speck Hebat Harga Hemat</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Sakinah Residence Probolinggo, Perumahan Subsidi dengan Speck Hebat, Harga Hemat dan Sehat" />
        <meta name="keywords" content="sakinah residence, perumahan sakinah, sakinah probolinggo, sakinah residence probolinggo, perumahan subsidi, perumahan paiton,
        perumahan murah, perumahan islami, perumahan, perumahan sakinah paiton, perumahan bagus, jual perumahan, sewa perumahan, jasa perumahan" />
        <meta name="author" content="Sakinah Residence" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="Sakinah Residence - Rumah Sehat Speck Hebat Harga Hemat" />
        <meta property="og:description" content="Sakinah Residence Probolinggo, Perumahan Subsidi dengan Speck Hebat, Harga Hemat dan Sehat" />
        <meta property="og:image" content="https://sakinahresidence.com/images/sakinah-residence-2.jpg" />
        <link rel="icon" href="/images/favico.png" />
      </Head>

      <Wrapper>
        <div className="flex min-h-full max-h-screen w-full">
          <SwiperHero
            Hero1={<Hero1 />}
            Hero2={<Hero2 />}
            bg1=''
            bg2="bg-[url('/images/banner1.jpg')] bg-cover bg-center bg-no-repeat"
          />
        </div>

        <div className="flex bg-no-repeat min-h-[70vh] w-full bg-[#98724B]">
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

        <div className="flex w-full bg-white">
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
          <img src='/images/whatsapp.png' alt="WhatsApp" className='w-full h-full' />
        </button>

      </Wrapper>
    </div>
  )
}

export default Home
