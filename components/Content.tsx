import Image from 'next/image'

import Content1 from '../public/images/content-1.jpg'

const Content = () => {
  return (
    <div className="flex container flex-col md:flex-row h-full items-center justify-evenly py-10 text-white">
      <div className="flex flex-col w-full md:w-7/12 text-left px-5 md:px-10">
        <h3 className="font-poppins text-4xl font-bold">Karya Cipta Sakinah</h3>
          <p className="font-poppins font-normal text-base pt-6">
            Mengembangkan hunian perumahan dengan rumah sehat, speck hebat, dan
            harga hemat. Sehingga terwujud pemukiman yang aman, nyaman, dan
            lingkungan yang asri. Memberikan kepuasan kepada konsumen dengan
            menjaga kualitas bangunan yang dapat diandalkan.
          </p>
      </div>

      <div className="hidden md:flex w-4/12 h-[300px] bg-slate-600">
        <Image src={Content1} alt="hero" className="object-cover brightness-75" />
      </div>
    </div>
  )
}

export default Content
