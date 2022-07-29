const Contact = () => {
  return (
    <div className="container grid auto-rows-auto md:grid-cols-3 gap-0 px-5 py-10 h-full text-white" id='contacts'>
      <div className="flex w-full px-10 lg:px-5 items-center justify-center">
        <img src='/images/logo-sakinah.png' alt="Sakinah Residence Logo"/>
      </div>

      <div className="flex flex-col w-full items-start justify-start">
        <h3 className="w-full font-poppins font-semibold text-lg my-5 text-center md:text-left">
          Address List
        </h3>

        <div className="flex flex-row w-full py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-house-heart-fill"
            viewBox="0 0 16 16"
          >
            <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.707L8 2.207 1.354 8.853a.5.5 0 1 1-.708-.707L7.293 1.5Z" />
            <path d="m14 9.293-6-6-6 6V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9.293Zm-6-.811c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018Z" />
          </svg>

          <p className="font-poppins text-sm text-left pl-3">
            Perum Sakinah Residence No. 01 Sumberanyar Paiton
          </p>
        </div>

        <div className="flex flex-row w-full py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-telephone-plus-fill"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5z"
            />
          </svg>

          <div className="flex flex-col">
            <p className="font-poppins text-sm text-left pl-3 py-1">
              +628-233-142-4705
            </p>
            <p className="font-poppins text-sm text-left pl-3 py-1">
              +628-123-199-4893
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full items-start justify-start">
        <h3 className="w-full font-poppins font-semibold text-lg my-5 text-center md:text-left">
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
            href="mailto:karyaciptasakinah@gmail.com"
            className="font-poppins text-sm text-left pl-3"
          >
            karyaciptasakinah@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
