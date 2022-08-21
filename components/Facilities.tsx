const Facilities = () => {
  return (
    <div className="container flex flex-col w-full h-full items-center justify-center py-5" id='about'>
        <h3 className='text-4xl font-lexend font-bold tracking-widest text-center mb-10'>OUR FACILITIES</h3>
        <div className="w-full grid auto-rows-auto md:grid-cols-4 gap-4 h-full">
            <div className="flex flex-col  items-center justify-center w-full h-full">
                <div className="flex h-40 w-40 bg-slate-300 rounded-full items-center justify-center hover:brightness-75 duration-300">
                    <img src='/images/musholla.png' className='flex object-contain object-'/>
                </div>
                <p className="font-poppins font-medium text-xl text-center pt-5">Musholla</p>
            </div>

            <div className="flex flex-col  items-center justify-center w-full h-full">
                <div className="flex h-40 w-40 bg-slate-300 rounded-full items-center justify-center hover:brightness-75 duration-300">
                    <img src='/images/jalan.png' className='flex object-contain object-'/>
                </div>
                <p className="font-poppins font-medium text-xl text-center pt-5">Jalan Paving 7 Meter</p>
            </div>

            <div className="flex flex-col  items-center justify-center w-full h-full">
                <div className="flex h-40 w-40 bg-slate-300 rounded-full items-center justify-center hover:brightness-75 duration-300">
                    <img src='/images/warna.png' className='flex object-contain object-'/>
                </div>
                <p className="font-poppins font-medium text-xl text-center pt-5">Free Warna Cat</p>
            </div>

            <div className="flex flex-col  items-center justify-center w-full h-full">
                <div className="flex h-40 w-40 bg-slate-300 rounded-full items-center justify-center hover:brightness-75 duration-300">
                    <img src='/images/pagar.png' className='flex object-contain object-'/>
                </div>
                <p className="font-poppins font-medium text-xl text-center pt-5">Free Pagar Samping</p>
            </div>
        </div>
    </div>
  )
}

export default Facilities
