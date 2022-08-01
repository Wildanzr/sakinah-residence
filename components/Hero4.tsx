const Hero3 = () => {
  return (
    <div className="flex flex-col md:flex-row container items-center justify-center h-[100vh]">
      <div className="flex flex-col w-full h-1/2 md:h-full md:w-1/2 items-center justify-evenly px-5 md:px-10">
        <div className="flex flex-col w-full items-center justify-center">
          <p className="text-xl md:text-2xl w-full font-normal tracking-wide font-poppins text-center md:text-left mb-10">Beli rumah disini..</p>
          <p className='text-4xl md:text-6xl w-full font-bold tracking-wider font-poppins text-center'>DAPAT BONUS SPESIAL!!!</p>
          <p className='text-xl md:text-2xl w-full font-normal tracking-wide font-poppins text-center mt-10 px-10'>
            Setiap pembelian unit pada bulan Agustus - September
          </p>
        </div>

          <p className="text-xl w-full font-normal font-montserrat tracking-wide text-center md:text-left pt-10 px-10">SakinahResidence.com</p>
      </div>

      <div className="flex flex-col w-full h-1/2 md:h-full md:w-1/2 items-center justify-center px-5 py-5 md:px-10">
        <img src='/images/banner-bonus.png' alt="Sakinah Residence" className="w-full h-full md:h-4/6 object-contain md:object-cover" />
      </div>
    </div>
  )
}

export default Hero3
