import type { NextPage } from 'next'
import Head from 'next/head'

import { SwiperHero, Map, Contact, Footer, Wrapper, Testimonial, Customer, Detail, Facilities, Product, SitePlan } from '../components'

const MutiaraSakinah: NextPage = () => {
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
        <div className="flex h-full w-full">
          <SwiperHero />
        </div>

        <div className="flex w-full my-20">
          <Detail
            t1='Menghadirkan hunian dengan rumah sehat, speck hebat, dan harga hemat'
            p1='/images/detail-mutiara-1.jpg'
            t2='Menghadirkan hunian eksklusif dengan beragam konsep mulai dari islamic modern style hingga european country style, Adyna Residence menjawab kebutuhan anda untuk memiliki hunian dengan best value yang sempurna. terdapat view gunung dan sungai sehingga sangat asri dan nyaman untuk rumah tinggal maupun rumah singgah.'
            p2='/images/detail-mutiara-2.jpg'
          />
        </div>

        <div className="flex w-full my-5 md:my-10 bg-[#DDDDDD]">
          <Product
            pic='/images/mutiara-sakinah-1.jpg'
            title='OUR SPECIFICATIONS'
          />
        </div>

        <div className="flex w-full h-full my-5 md:my-10 brightness-50">
          <SitePlan />
        </div>

        <div className="flex w-full my-5 md:my-10">
          <Facilities />
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

export default MutiaraSakinah
