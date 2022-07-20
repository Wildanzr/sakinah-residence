import Image from 'next/image'

import hero from '../public/images/content-2.jpg'

const Hero = () => {
  return (
    <div className="flex container relative min-h-full max-h-screen">
      <div className="flex px-0 md:px-10 w-full justify-between items-center flex-col md:flex-row-reverse">
        <div className="flex relative w-full h-3/6 border-white border-4 md:border-[15px]">
          <Image src={hero} alt="hero" className="w-full h-full object-cover" />
          <div className="flex absolute font-adinnaka font-bold text-3xl bottom-[8%] md:-left-[18%] px-1 bg-[#FEB60C]">
            <p>NOL DP</p>
          </div>
        </div>

        <div className='flex w-full h-3/6 flex-col justify-start md:justify-center text-center md:text-left my-10'>
          <h1 className="text-4xl md:text-6xl font-lemon tracking-widest">KARYA CIPTA</h1>
          <h1 className="text-5xl md:text-6xl font-lemon tracking-widest pt-3">SAKINAH</h1>
          <p className="py-6 text-base md:text-xl font-poppins">
            Pemukiman yang aman, nyaman, <br /> dan lingkungan yang asri.
          </p>
        </div>
      </div>

      <p className='flex absolute font-monument font-black text-5xl md:text-8xl bottom-[2%] -left-[25%] md:-left-[10%] tracking-wider opacity-[5%]'>
        KARYA CIPTA <br /> SAKINAH
      </p>
    </div>
  )
}

export default Hero
