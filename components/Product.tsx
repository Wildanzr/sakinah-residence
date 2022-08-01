import { useState } from 'react'
interface ProductProps {
  pic: string
  title: string
}
const Product = (props: ProductProps) => {
  const { pic, title } = props
  // Local State
  const [durations] = useState([
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15
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
  const [rate] = useState(0.004)

  // Local Result
  const [loanCredit, setLoadCredit] = useState(credits[0])
  const [loanDuration, setLoanDuration] = useState(durations[0])
  const [result, setResult] = useState(187_798)

  // PMT
  const countPMT = (rate: any, nper: any, pv: any, fv: any, type: any) => {
    /*
     * rate   - interest rate per month
     * nper   - number of periods (months)
     * pv   - present value
     * fv   - future value
     * type - when the payments are due:
     *        0: end of the period, e.g. end of month (default)
     *        1: beginning of period
     */
    let pmt = 0

    fv || (fv = 0)
    type || (type = 0)

    if (rate === 0) { return -(pv + fv) / nper }

    const pvif = Math.pow(1 + rate, nper)
    pmt = -rate * (pv * pvif + fv) / (pvif - 1)

    if (type === 1) { pmt /= (1 + rate) }

    setResult(Math.ceil(pmt * -1))
    return pmt * -1
  }

  const rupiah = (number: any) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(number)
  }

  const handleChangeCredit = (e: any) => {
    setLoadCredit(e.target.value)
  }

  const handleChangeDuration = (e: any) => {
    setLoanDuration(e.target.value)
  }

  return (
    <div className="container flex flex-col h-full items-center justify-center px-5 md:px-10">
      <h3 className="flex text-3xl font-lemon tracking-widest text-center py-5 md:py-10">
        {title}
      </h3>
      <div className="flex flex-col md:flex-row w-full h-full items-center justify-between">
        <div className="flex w-full md:w-1/2 h-full items-center justify-center px-5 my-5">
          <div className="flex flex-col w-full h-full">
            <div className="flex flex-col w-full h-1/2 py-2 md:marker:py-5">
              <img
                src={pic}
                alt="Sakinah Residence"
                className="flex h-[90%] w-full object-cover"
              />
              <p className="flex h-[10%] font-poppins text-xl items-center justify-center text-center font-semibold bg-white text-black">Type 32/72</p>
            </div>

            <div className="flex flex-col w-full h-1/2 py-2 md:py-5">
              <div className="flex flex-col w-full bg-[#E9E9E9] drop-shadow-lg rounded-md px-5 py-5">
                <p className='font-poppins text-lg font-semibold pb-2'>Spesifikasi Rumah:</p>
                <ul className="list-disc font-poppins text-base px-5">
                  <li>Pondasi: Pasangan batu kali</li>
                  <li>Struktur: Beton bertulang</li>
                  <li>Dinding: Pasangan bata (finishing)</li>
                  <li>Atap: Rangka galvalum & genteng beton</li>
                  <li>Pintu depan: Panel</li>
                  <li>Plafon: Rangka galvalum</li>
                  <li>Sanitair: Kloset jongkok (air bersih)</li>
                  <li>Listrik: 900W</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full md:w-1/2 h-full items-center justify-center px-5 my-5">
          <div className="flex flex-col w-full h-full">
            <div className="flex flex-col w-full h-1/2 py-2 md:marker:py-5">
              <img
                src={'/images/denah.jpg'}
                alt="Sakinah Residence"
                className="flex h-[90%] w-full object-cover"
              />
              <p className="flex h-[10%] font-poppins text-xl items-center justify-center text-center font-semibold bg-white text-black">Sketsa Denah Rumah</p>
            </div>

            <div className="flex flex-col w-full full py-2 md:py-5">
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
                      {durations.map((year, index) => (
                        <option key={index} value={year}>
                          {year} Tahun ({year * 12} Bulan)
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex w-full items-end justify-start px-5 py-2">
                  <button
                      className="btn btn-primary btn-sm"
                      onClick={() => countPMT(rate, (loanDuration * 12), loanCredit, 0, 0)}
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
      </div>
    </div>
  )
}

export default Product
