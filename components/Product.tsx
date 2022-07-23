import Image from 'next/image'

import Sk1 from '../public/images/sakinah-residence-1.jpg'

const Product = () => {
  return (
    <div className="container flex flex-col h-full items-center justify-center">
      <h3 className="flex text-3xl font-lemon tracking-widest text-center my-5">
        SAKINAH RESIDENCE
      </h3>
      <div className="flex flex-col md:flex-row w-full h-full items-center justify-between pt-10">
        <div className="flex w-full md:w-1/2 h-full items-center justify-center">
          <div className="flex flex-col w-9/12">
            <Image
              src={Sk1}
              alt="Sakinah Residence"
              className="w-full h-full object-cover"
            />
            <p className="font-poppins text-xl text-center font-bold py-2 bg-[#E7AC29] text-white">Type 32/72</p>
          </div>
        </div>

        <div className="flex flex-col w-full md:w-1/2 h-full items-start justify-start px-5 pt-5">
          <p className="font-poppins text-lg font-semibold pb-5">
            Pilihan Angsuran:
          </p>
          <div className="flex flex-col md:flex-row w-full items-center justify-start py-2">
            <p className='flex w-full md:w-1/3 font-poppins font-medium text-base px-5'>Kredit Maksimum</p>
            <div className="form-control w-full max-w-xs">
              <select className="select select-bordered select-sm bg-white font-poppins text-sm font-light">
                <option disabled selected>
                  Pilihan Jumlah Kredit
                </option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col md:flex-row w-full items-center justify-start py-2">
            <p className='flex w-full md:w-1/3 font-poppins font-medium text-base px-5'>Jangka Waktu</p>
            <div className="form-control w-full max-w-xs">
              <select className="select select-bordered select-sm bg-white font-poppins text-sm font-light">
                <option disabled selected>
                  Pilihan Jangka Waktu
                </option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col w-full items-center justify-center md:justify-start md:items-start">
            <p className="font-poppins text-lg font-semibold pt-5">
                Total Angsuran Per Bulan:
            </p>
            <div className="flex pt-5">
                <p className="font-poppins text-2xl font-bold px-2 py-1 bg-[#E7AC29]">
                    Rp 233.000
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
