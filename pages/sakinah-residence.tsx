import type { NextPage } from 'next'
import Head from 'next/head'

import { SwiperHero, Map, Contact, Footer, Wrapper, SitePlan, Detail, Facilities, Product, Hero3, Hero4 } from '../components'

const SakinahResidence: NextPage = () => {
  const whatsAppChat = () => {
    window.open(
      'https://wa.me/6281231994893?text=Hallo%0ASaya%20ingin%20tahu%20informasi%20lebih%20lanjut%20tentang%20Sakinah%20Residence',
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
        <div className="flex h-full w-full">
          <SwiperHero
            Hero1={<Hero3
              t1="SAKINAH"
              t1font="font-montserrat"
              t2="Residence"
              t2font="font-dancing"
              content="Hunian dengan rumah sehat, speck hebat, dan harga hemat"
              img="/images/banner-sakinah.png"
              col="text-black"
              />}
            bg1="bg-[#E7E7E7]"
            bg2="bg-[#FFF4DB]"
            Hero2={<Hero4 />}
          />
        </div>

        <div className="flex w-full my-20">
          <Detail
            t1='Permukiman yang aman, nyaman, dan lingkungan yang asri'
            p1='/images/detail-sakinah-1.jpg'
            t2='Mengembangkan hunian perumahan dengan rumah sehat, speck hebat, dan harga hemat. Sehingga terwujud pemukiman yang aman, nyaman, dan lingkungan yang asri. Memberikan kepuasan kepada konsumen dengan menjaga kualitas bangunan yang dapat diandalkan.'
            p2='/images/detail-sakinah-2.jpg'
          />
        </div>

        <div className="flex w-full my-10 bg-[#DDDDDD]">
          <Product
            pic='/images/sakinah-residence-1.jpg'
            title='OUR SPECIFICATIONS'
          />
        </div>

        <div className="flex w-full my-10">
          <Facilities />
        </div>

        <div className="flex w-full h-full mt-5 md:mt-10 brightness-50">
          <SitePlan image='/images/siteplan-sakinah.jpg' />
        </div>

        <div className="flex w-full bg-white">
          <Map map='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61456.99462588896!2d113.51135091594406!3d-7.724513339248215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7038484881b23%3A0x481b10811d2e42c7!2sSakinah%20Residence!5e0!3m2!1sid!2sid!4v1658275532142!5m2!1sid!2sid' />
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

export default SakinahResidence
