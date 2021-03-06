
import Link from 'next/link'
import BgProj1 from '../public/images/proj-1.jpg'
import BgProj2 from '../public/images/proj-2.jpg'
import BgProj3 from '../public/images/proj-3.jpg'

const Project = () => {
  return (
    <div className="flex container flex-col justify-center" id='projects'>
        <h3 className='text-3xl font-lemon tracking-widest text-center my-10'>OUR PROJECT</h3>

        <div className="w-full h-[1200px] md:h-[450px] grid auto-rows-auto md:grid-cols-3 gap-0 text-white">

            <Link href="/sakinah-residence">
                <div className="flex h-full flex-col items-center justify-center brightness-50 cursor-pointer hover:brightness-100 duration-300" style={{ background: `url(${BgProj1.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <p className='text-6xl font-montserrat font-bold'>SAKINAH</p>
                    <p className='text-6xl font-dancing font-bold'>Residence</p>
                </div>
            </Link>

            <Link href="/griya-mega-sakinah">
            <div className="flex h-full flex-col items-center justify-center brightness-50 cursor-pointer hover:brightness-100 duration-300" style={{ background: `url(${BgProj2.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <p className='text-6xl font-montserrat font-bold proj-text-stroke-white text-[#614267]'>Griya Mega</p>
                <p className='text-6xl font-montserrat font-bold proj-text-stroke-white text-[#614267]'>Sakinah</p>
            </div>
            </Link>

            <Link href="/mutiara-sakinah">
            <div className="flex h-full flex-col items-center justify-center brightness-50 cursor-pointer hover:brightness-100 duration-300" style={{ background: `url(${BgProj3.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <p className='text-6xl font-lora font-semibold proj-text-stroke-black'>MUTIARA</p>
                <p className='text-6xl font-lora font-semibold proj-text-stroke-black'>SAKINAH</p>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Project
