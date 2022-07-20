import Image from 'next/image'

import hero from '../public/images/content-2.jpg'

const Hero = () => {
  return (
    <div className="flex container relative hero min-h-full w-full bg-hero-yellow">
      <div className="hero-content w-full justify-between flex-col lg:flex-row-reverse">
        <div className="flex relative mx-5 w-3/6 min-h-full border-white border-[15px]">
          <Image src={hero} alt="hero" className="w-full h-full" />
          <div className="flex absolute font-adinnaka font-bold text-3xl bottom-[8%] -left-[18%] px-1 bg-[#FEB60C]">
            <p>NOL DP</p>
          </div>
        </div>

        <div className='flex mx-5 min-h-full flex-col'>
          <h1 className="text-6xl font-lemon tracking-widest">KARYA CIPTA</h1>
          <h1 className="text-6xl font-lemon tracking-widest pt-3">SAKINAH</h1>
          <p className="py-6 text-xl font-poppins">
            Pemukiman yang aman, nyaman, <br /> dan lingkungan yang asri.
          </p>
        </div>
      </div>

      <p className='flex absolute font-monument font-black text-8xl bottom-[2%] -left-[25%] md:-left-[10%] tracking-wider opacity-[5%]'>
        KARYA CIPTA <br /> SAKINAH
      </p>
    </div>
  )
}

export default Hero
