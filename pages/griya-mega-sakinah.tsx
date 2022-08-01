import type { NextPage } from 'next'
import Head from 'next/head'

import { SwiperHero, Map, Contact, Footer, Wrapper, Testimonial, Customer, Detail, Facilities, Product, Hero3, Hero4 } from '../components'

const GriyaMegaSakinah: NextPage = () => {
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
          <SwiperHero
            Hero1={<Hero3
              t1="GRIYA MEGA"
              t1font="font-cormorant"
              t2="SAKINAH"
              t2font="font-cormorant"
              content="Permukiman yang aman, nyaman, dan lingkungan yang asri"
              img="/images/banner-griya.png"
              col="text-white"
              />}
            bg1="bg-[#98724B]"
            bg2="bg-[#FFF4DB]"
            Hero2={<Hero4 />}
          />
        </div>

        <div className="flex w-full my-20">
          <Detail
            t1='Menghadirkan hunian dengan rumah sehat, speck hebat, dan harga hemat'
            p1='/images/detail-griya-1.jpg'
            t2='Mengembangkan hunian perumahan dengan rumah sehat, speck hebat, dan harga hemat. Sehingga terwujud pemukiman yang aman, nyaman, dan lingkungan yang asri. Memberikan kepuasan kepada konsumen dengan menjaga kualitas bangunan yang dapat diandalkan.'
            p2='/images/detail-griya-2.jpg'
          />
        </div>

        <div className="flex w-full my-10">
          <Product
            pic='/images/mega-sakinah-1.jpg'
            title='Griya Mega Sakinah'
          />
        </div>

        <div className="flex w-full my-10">
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

export default GriyaMegaSakinah
