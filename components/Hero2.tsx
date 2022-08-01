const Hero2 = () => {
  return (
    <div className="flex flex-col md:flex-row container relative items-center px-10 min-h-full max-h-screen">
      <div className="flex w-full flex-col h-2/6 md:h-3/6 py-10">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-4xl md:text-6xl font-adlinnaka py-1.5">
            Rumah Sehat
          </p>
          <p className="text-4xl md:text-6xl font-adlinnaka py-1.5">
            Speck Hebat
          </p>
          <p className="text-4xl md:text-6xl font-adlinnaka py-1.5">
            Harga Hemat
          </p>
        </div>

        <div className="flex mt-5 items-center justify-center md:justify-start">
          <p className="flex font-adinnaka font-bold text-3xl px-2 py-1 bg-[#FEB60C]">
            Type 32/72
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col h-full items-center justify-end py-10">
        <p className="text-white font-poppins tracking-wide text-xl text-center">Kantor pemasaran Sakinah Residence</p>
      </div>
    </div>
  )
}

export default Hero2
