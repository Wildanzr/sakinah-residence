const Contact = () => {
  const whatsAppChat = () => {
    window.open(
      'https://wa.me/6281231994893?text=Hallo%0ASaya%20ingin%20tahu%20informasi%20lebih%20lanjut%20tentang%20Sakinah%20Residence',
      '_blank'
    )
  }
  return (
    <div
      className="container grid auto-rows-auto md:grid-cols-3 gap-0 px-5 py-10 h-full text-white"
      id="contacts"
    >
      <div className="flex w-full px-10 lg:px-5 items-center justify-center">
        <img src="/images/logo-sakinah.png" alt="Sakinah Residence Logo" />
      </div>

      <div className="flex flex-col w-full items-start justify-start">
        <h3 className="w-full font-poppins font-semibold text-lg my-5 md:text-left">
          Address List
        </h3>

        <div className="flex flex-row w-full items-start py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-house-heart-fill"
            viewBox="0 0 16 16"
          >
            <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.707L8 2.207 1.354 8.853a.5.5 0 1 1-.708-.707L7.293 1.5Z" />
            <path d="m14 9.293-6-6-6 6V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9.293Zm-6-.811c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018Z" />
          </svg>

          <p className="font-poppins text-sm text-left pl-3 pr-5">
            Perum Sakinah Residence No. 01 Sumberanyar Paiton Kab. Probolinggo
          </p>
        </div>

        <div className="flex flex-row w-full items-center py-2 cursor-pointer"
          onClick={whatsAppChat}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-whatsapp"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
          </svg>

          <div className="flex flex-col">
            <a
              className="font-poppins text-sm text-left pl-3 py-1"
            >
              +628-123-199-4893
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full items-start justify-start">
        <h3 className="w-full font-poppins font-semibold text-lg my-5 md:text-left">
          Social Network
        </h3>

        <div className="flex flex-row w-full items-center py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-envelope-fill"
            viewBox="0 0 16 16"
          >
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
          </svg>

          <a
            href="mailto:griyakusakinahku16@gmail.com"
            className="font-poppins text-sm text-left pl-3"
          >
            griyakusakinahku16@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
