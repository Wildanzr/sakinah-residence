import { useState } from 'react'
import Image from 'next/image'

import Sk1 from '../public/images/sakinah-residence-1.jpg'

const Product = () => {
  // Local State
  const [durationAndTax] = useState([
    {
      duration: 5,
      str: '5',
      fee: 0.132272
    },
    {
      duration: 6,
      str: '6',
      fee: 0.1595528
    },
    {
      duration: 7,
      str: '7',
      fee: 0.1872476
    },
    {
      duration: 8,
      str: '8',
      fee: 0.2153504
    },
    {
      duration: 9,
      str: '9',
      fee: 0.2438684
    },
    {
      duration: 10,
      str: '10',
      fee: 0.272792
    },
    {
      duration: 11,
      str: '11',
      fee: 0.302114
    },
    {
      duration: 12,
      str: '12',
      fee: 0.3318416
    },
    {
      duration: 13,
      str: '13',
      fee: 0.3619736
    },
    {
      duration: 14,
      str: '14',
      fee: 0.3925016
    },
    {
      duration: 15,
      str: '15',
      fee: 0.423422
    }
  ])
  const [credits] = useState([
    10_000_000,
    25_000_000,
    50_000_000,
    60_000_000,
    70_000_000,
    80_000_000,
    90_000_000,
    100_000_000,
    110_000_000,
    120_000_000,
    123_000_000,
    130_000_000,
    133_000_000,
    143_000_000
  ])
  // Local Result
  const [loanCredit, setLoadCredit] = useState(credits[0].toString())
  const [loanDuration, setLoanDuration] = useState(durationAndTax[0].str)
  const [result, setResult] = useState(188_712)

  const rupiah = (number: any) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(number)
  }

  const count = () => {
    // Find index of loanDuration in durationAndTax
    const index = durationAndTax.findIndex(
      (item: any) => item.str === loanDuration
    )
    const duration = parseInt(loanDuration)
    const credit = parseInt(loanCredit)
    setResult((durationAndTax[index].fee * credit + credit) / (duration * 12))
  }

  const handleChangeCredit = (e: any) => {
    setLoadCredit(e.target.value)
  }

  const handleChangeDuration = (e: any) => {
    setLoanDuration(e.target.value)
  }

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
              <select defaultValue={0} onChange={handleChangeCredit} className="select select-bordered select-sm bg-white font-poppins text-sm font-light">
                <option disabled selected>
                  Pilihan Jumlah Kredit
                </option>
                {credits.map((credit, index) => (
                  <option key={index} value={credit}>
                    {rupiah(credit)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col md:flex-row w-full items-center justify-start py-2">
            <p className='flex w-full md:w-1/3 font-poppins font-medium text-base px-5'>Jangka Waktu</p>
            <div className="form-control w-full max-w-xs">
              <select defaultValue={0} onChange={handleChangeDuration} className="select select-bordered select-sm bg-white font-poppins text-sm font-light">
                <option disabled selected>
                  Pilihan Jangka Waktu
                </option>
                {durationAndTax.map((item, index) => (
                  <option key={index} value={item.duration}>
                    {item.duration} Tahun ({item.duration * 12} Bulan)
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex w-full items-end justify-start px-5 py-2">
            <button
                className="btn btn-primary btn-sm"
                onClick={count}
              >
                Hitung
              </button>
          </div>

          <div className="flex flex-col w-full items-center justify-center md:justify-start md:items-start">
            <p className="font-poppins text-lg font-semibold pt-2">
                Total Angsuran Per Bulan:
            </p>
            <div className="flex mt-5 bg-[#E7AC29] rounded-lg">
                <p className="font-poppins text-2xl font-bold px-2 py-1">
                  {rupiah(result)}
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
