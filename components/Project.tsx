
import Link from 'next/link'

const Project = () => {
  return (
    <div className="flex container flex-col justify-center" id='projects'>
        <h3 className='text-4xl font-lexend font-bold tracking-widest text-center my-10'>OUR PROJECT</h3>

        <div className="w-full h-[1200px] md:h-[450px] grid auto-rows-auto md:grid-cols-3 gap-0 text-white">

            <Link href="/sakinah-residence">
                <div className="flex h-full flex-col items-center justify-center brightness-50 cursor-pointer hover:brightness-100 duration-300" style={{ background: 'url(/images/proj-sakinah.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <p className='text-6xl font-montserrat font-bold proj-shadow-text'>SAKINAH</p>
                    <p className='text-6xl font-dancing font-bold proj-shadow-text'>Residence</p>
                </div>
            </Link>

            <Link href="/griya-mega-sakinah">
            <div className="flex h-full flex-col items-center justify-center brightness-50 cursor-pointer hover:brightness-100 duration-300" style={{ background: 'url(/images/proj-griya.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <p className='text-6xl font-cormorant font-bold text-white proj-shadow-text'>Griya Mega</p>
                <p className='text-6xl font-cormorant font-bold text-white proj-shadow-text'>Sakinah</p>
            </div>
            </Link>

            <Link href="/mutiara-sakinah">
            <div className="flex h-full flex-col items-center justify-center brightness-50 cursor-pointer hover:brightness-100 duration-300" style={{ background: 'url(/images/proj-mutiara.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <p className='text-6xl font-ubuntu font-medidum proj-shadow-text'>MUTIARA</p>
                <p className='text-6xl font-ubuntu font-medidum proj-shadow-text'>SAKINAH</p>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Project
