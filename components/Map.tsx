interface MapProps {
  map: string
}

const Map = (props: MapProps) => {
  const { map } = props
  return (
    <div className="flex w-full h-[40vh] items-center justify-center">
      <iframe
        src={map}
        style={{ border: 0 }}
        allowFullScreen={true}
        className="w-full h-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default Map
