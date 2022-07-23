import Image from 'next/image'

import Musholla from '../public/images/musholla.png'
import Jalan from '../public/images/jalan.png'
import Pagar from '../public/images/pagar.png'
import Warna from '../public/images/warna.png'

const Facilities = () => {
  return (
    <div className="container flex flex-col w-full h-full items-center justify-center py-5">
        <h3 className='text-3xl font-lemon tracking-widest text-center my-5'>OUR FACILITIES</h3>
        <div className="w-full grid auto-rows-auto md:grid-cols-4 gap-4 h-full">
            <div className="flex flex-col  items-center justify-center w-full h-full">
                <div className="flex h-40 w-40 bg-slate-300 rounded-full items-center justify-center hover:brightness-75 duration-300">
                    <Image src={Musholla} className='flex object-contain object-'/>
                </div>
                <p className="font-poppins font-medium text-xl text-center pt-5">Musholla</p>
            </div>

            <div className="flex flex-col  items-center justify-center w-full h-full">
                <div className="flex h-40 w-40 bg-slate-300 rounded-full items-center justify-center hover:brightness-75 duration-300">
                    <Image src={Jalan} className='flex object-contain object-'/>
                </div>
                <p className="font-poppins font-medium text-xl text-center pt-5">Jalan Paving 7 Meter</p>
            </div>

            <div className="flex flex-col  items-center justify-center w-full h-full">
                <div className="flex h-40 w-40 bg-slate-300 rounded-full items-center justify-center hover:brightness-75 duration-300">
                    <Image src={Warna} className='flex object-contain object-'/>
                </div>
                <p className="font-poppins font-medium text-xl text-center pt-5">Free Warna Cat</p>
            </div>

            <div className="flex flex-col  items-center justify-center w-full h-full">
                <div className="flex h-40 w-40 bg-slate-300 rounded-full items-center justify-center hover:brightness-75 duration-300">
                    <Image src={Pagar} className='flex object-contain object-'/>
                </div>
                <p className="font-poppins font-medium text-xl text-center pt-5">Free Pagar Samping</p>
            </div>
        </div>
    </div>
  )
}

export default Facilities
