import Image, { StaticImageData } from 'next/image'

interface Props {
    t1: string
    p1: StaticImageData
    t2: string
    p2: StaticImageData
}
const Detail = (props: Props) => {
  const { t1, p1, t2, p2 } = props
  return (
    <div className="container h-full items-center grid auto-rows-auto md:grid-cols-2 gap-3 md:gap-10 px-10">
        <div className="flex flex-col w-full h-full md:h-5/6">
            <p className='flex h-1/3 w-full text-center items-end justify-center font-lora text-lg md:text-2xl px-5 py-4 md:py-10'>{t1}</p>
            <Image src={p1} alt="Sakinah Residence" className='w-full h-full pt-5 object-cover' />
        </div>

        <div className="flex flex-col w-full h-full md:h-5/6">
            <Image src={p2} alt="Sakinah Residence" className='w-full h-full pb-5 object-cover' />
            <p className='flex h-1/3 w-full text-justify items-start justify-start font-poppins text-sm md:text-base py-4 md:py-10'>{t2}</p>
        </div>

    </div>
  )
}

export default Detail
