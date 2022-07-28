const Map = () => {
  return (
    <div className="flex w-full h-[40vh] items-center justify-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61456.99462588896!2d113.51135091594406!3d-7.724513339248215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7038484881b23%3A0x481b10811d2e42c7!2sSakinah%20Residence!5e0!3m2!1sid!2sid!4v1658275532142!5m2!1sid!2sid"
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
