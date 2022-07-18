import Image from 'next/image'

import hero from '../public/images/content-2.jpg'

const Hero = () => {
  return (
    <div className="hero min-h-screen w-full bg-hero-yellow">
      <div className="hero-content w-full justify-between flex-col lg:flex-row-reverse">
        <div className="flex relative mx-5 w-3/6 min-h-full border-white border-[15px]">
          <Image src={hero} alt="hero" className="w-full h-full" />
          <div className="flex absolute font-bold text-3xl bottom-[8%] -left-[18%] px-1 bg-[#FEB60C]">
            <p>NOL DP</p>
          </div>
        </div>
        <div className='flex mx-5 flex-col'>
          <h1 className="text-6xl font-bold tracking-widest">KARYA CIPTA <br/> SAKINAH</h1>
          <p className="py-6 text-lg">
            Pemukiman yang aman, nyaman, dan lingkungan yang asri.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
