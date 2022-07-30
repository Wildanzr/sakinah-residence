interface Props {
    t1: string
    p1: string
    t2: string
    p2: string
}
const Detail = (props: Props) => {
  const { t1, p1, t2, p2 } = props
  return (
    <div className="container h-full items-center grid auto-rows-auto md:grid-cols-2 gap-3 md:gap-10">
        <div className="flex flex-col w-full h-full">
          <div className="flex w-full h-2/6 items-center">
            <p className='flex w-full text-center justify-center font-lora text-lg md:text-2xl px-5 py-4 md:py-10'>{t1}</p>
          </div>

          <div className="flex w-full h-4/6">
            <img src={p1} alt="Sakinah Residence" className='w-full h-full object-cover' />
          </div>
        </div>

        <div className="flex flex-col w-full h-full">
          <div className="flex w-full h-4/6">
            <img src={p2} alt="Sakinah Residence" className='w-full h-full object-cover' />
          </div>

          <div className="flex w-full h-2/6">
            <p className='flex h-1/3 w-full text-justify items-start justify-start font-poppins text-sm md:text-base py-4 md:py-10'>{t2}</p>
          </div>
        </div>

    </div>
  )
}

export default Detail
