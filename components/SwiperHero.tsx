import { ReactNode } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

interface SwiperHeroProps {
  Hero1: ReactNode,
  Hero2: ReactNode,
  bg1: String,
  bg2: String
}
const SwiperHero = (props: SwiperHeroProps) => {
  const { Hero1, Hero2, bg1, bg2 } = props
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false
      }}
      pagination={{
        clickable: true
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="mySwiper w-full h-screen"
      id="home"
    >
      <SwiperSlide>
        <div className={`flex min-h-full max-h-screen w-full ${bg1 || 'bg-hero-yellow '}`}>
          {Hero1}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`flex min-h-full max-h-screen w-full ${bg2 || ''}`}>
          {Hero2}
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default SwiperHero
