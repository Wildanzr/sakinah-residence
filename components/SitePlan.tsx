interface SitePlanProps {
  image: string
}

const SitePlan = (props: SitePlanProps) => {
  const { image } = props
  console.log(image)
  return (
    <div className="container flex flex-col h-[40vh] md:h-screen">
        <div className="flex h-1/6 w-full items-center justify-center">
            <h3 className="text-4xl font-lexend font-bold tracking-widest pb-5">SITEPLAN</h3>
        </div>

        <img src={image} className="flex h-full w-full bg-center bg-cover" />
    </div>
  )
}

export default SitePlan
