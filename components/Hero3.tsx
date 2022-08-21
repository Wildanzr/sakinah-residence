interface Hero3Props {
  t1: String,
  t2: String,
  t1font: String,
  t2font: String,
  img: string,
  content: String,
  col: String
}

const Hero3 = (props: Hero3Props) => {
  const { t1, t2, t1font, t2font, img, content, col } = props
  return (
    <div className="flex flex-col md:flex-row container items-center justify-center h-[100vh]">
      <div className={`flex flex-col w-full h-1/2 md:h-full md:w-1/2 items-center justify-evenly px-5 md:px-10 ${col || 'text-white'}`}>
        <div className="flex flex-col items-center justify-center">
          <p className={`text-6xl md:text-7xl font-bold tracking-wider ${t1font || ''}`}>{t1}</p>
          <p className={`text-6xl md:text-7xl font-bold tracking-wider ${t2font || ''}`}>{t2}</p>
        </div>

          <p className="text-2xl font-normal font-montserrat tracking-wide text-center pt-10 px-10">{content}</p>
      </div>

      <div className="flex flex-col w-full h-1/2 md:h-full md:w-1/2 items-center justify-center px-5 py-5 md:px-10">
        <img src={img} alt={`${t1} ${t2}`} className="w-full h-full md:h-4/6 object-contain" />
      </div>
    </div>
  )
}

export default Hero3
