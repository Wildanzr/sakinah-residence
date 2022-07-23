import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Hero1, Hero2 } from './index'

const SwiperHero = () => {
  return (
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper w-full h-full"
        id='home'
      >
        <SwiperSlide>
        <div className="flex bg-hero-yellow min-h-full max-h-screen w-full">
          <Hero1 />
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex bg-banner-1 bg-center bg-cover min-h-full max-h-screen w-full">
          <Hero2 />
        </div>
        </SwiperSlide>
      </Swiper>
  )
}

export default SwiperHero