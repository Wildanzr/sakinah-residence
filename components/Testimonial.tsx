import Person1 from '../public/images/photo-1.jpeg'
import Person2 from '../public/images/photo-2.jpg'
import Person3 from '../public/images/photo-3.jpeg'

const Testimonial = () => {
  return (
    <div
      className="flex flex-col container items-center justify-center text-center my-10"
      id="testimonials"
    >
      <span className="font-poppins text-[#6B6B6B] text-2xl tracking-wider pt-5 pb-2">
        What People Says
      </span>
      <h3 className="text-4xl font-lexend font-bold tracking-widest pb-5">TESTIMONIALS</h3>

      <div className="w-full h-[1200px] md:h-[450px] grid auto-rows-auto md:grid-cols-3 gap-0 text-white">
        <div className="flex flex-col w-full h-full items-center justify-center">
          <div className="flex relative w-9/12 h-2/6 bg-[#FBFDFF] shadow-2xl items-center justify-center rounded-lg px-3">
            <div className="flex absolute border-solid border-t-[#FBFDFF] shadow-2xl border-t-[30px] border-x-transparent border-x-[30px] border-b-0 -bottom-[15%]" />
            <p className="leading-5 tracking-wide text-center font-poppins text-base font-extralight text-black">
              Suasana dan pemandangan di Sakinah Residence sangat sejuk, dan tata letaknya sangat bagus.
            </p>
          </div>

          <div
            className="flex w-2/6 h-2/6 bg-slate-600 rounded-full items-center justify-center mt-10"
            style={{
              backgroundImage: `url(${Person1.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>

          <div className="flex flex-col my-4 items-center justify-center text-black">
            <p className="font-poppins font-semibold text-xl">Agus Setiawan</p>
            <span className="font-poppins font-light text-sm">Wirausaha</span>
          </div>
        </div>

        <div className="flex flex-col w-full h-full items-center justify-center">
          <div className="flex relative w-9/12 h-2/6 bg-[#FBFDFF] shadow-2xl items-center justify-center rounded-lg px-3">
            <div className="flex absolute border-solid border-t-[#FBFDFF] border-t-[30px] border-x-transparent border-x-[30px] border-b-0 -bottom-[15%]" />
            <p className="leading-5 tracking-wide text-center font-poppins text-base font-extralight text-black">
              Sakinah Residence memiliki fasilitas dan jalan akses yang sangat bagus dan memiliki letak yang strategis.
            </p>
          </div>

          <div
            className="flex w-2/6 h-2/6 bg-slate-600 rounded-full items-center justify-center mt-10"
            style={{
              backgroundImage: `url(${Person2.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>

          <div className="flex flex-col my-4 items-center justify-center text-black">
            <p className="font-poppins font-semibold text-xl">Haris Romadhon</p>
            <span className="font-poppins font-light text-sm">Mahasiswa</span>
          </div>
        </div>

        <div className="flex flex-col w-full h-full items-center justify-center">
          <div className="flex relative w-9/12 h-2/6 bg-[#FBFDFF] shadow-2xl items-center justify-center rounded-lg px-3">
            <div className="flex absolute border-solid border-t-[#FBFDFF] border-t-[30px] border-x-transparent border-x-[30px] border-b-0 -bottom-[15%]" />
            <p className="leading-5 tracking-wide text-center font-poppins text-base font-extralight text-black">
              Lingkungan yang asri, banyak pepohonan, jalan yang bagus dan fasilitas yang lengkap.
            </p>
          </div>

          <div
            className="flex w-2/6 h-2/6 bg-slate-600 rounded-full items-center justify-center mt-10"
            style={{
              backgroundImage: `url(${Person3.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>

          <div className="flex flex-col my-4 items-center justify-center text-black">
            <p className="font-poppins font-semibold text-xl">Achma Apep</p>
            <span className="font-poppins font-light text-sm">Dokter</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
