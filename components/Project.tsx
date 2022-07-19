const Project = () => {
  return (
    <div className="flex container flex-col w-full bg-white items-center justify-center">
        <h3 className='text-3xl font-lemon text-center my-5'>OUR PROJECT</h3>

        <div className="w-full h-[450px] grid grid-cols-3 gap-0 text-white">
            <div className="flex flex-col items-center justify-center bg-proj-1 bg-center bg-cover brightness-50 hover:brightness-100 duration-300">
                <p className='text-6xl font-montserrat font-bold'>SAKINAH</p>
                <p className='text-6xl font-dancing font-bold'>Residence</p>
            </div>

            <div className="flex flex-col items-center justify-center bg-proj-2 bg-center bg-cover brightness-50 hover:brightness-100 duration-300">
                <p className='text-6xl font-montserrat font-bold proj-text-stroke-white text-[#614267]'>Griya Mega</p>
                <p className='text-6xl font-montserrat font-bold proj-text-stroke-white text-[#614267]'>Sakinah</p>
            </div>

            <div className="flex flex-col items-center justify-center bg-proj-3 bg-center bg-cover brightness-50 hover:brightness-100 duration-300">
                <p className='text-6xl font-lora font-semibold proj-text-stroke-black'>MUTIARA</p>
                <p className='text-6xl font-lora font-semibold proj-text-stroke-black'>SAKINAH</p>
            </div>
        </div>
    </div>
  )
}

export default Project
