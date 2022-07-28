import Link from 'next/link'

const Nav = () => {
  return (
    <div className="container flex flex-row navbar justify-between">
      <div className="flex h-12 w-28 mx-2 lg:mx-5 items-center justify-center">
        <Link href="/">
          <img src='/images/logo-sakinah.png' alt="Sakinah Residence Logo" className='w-full h-full object-cover cursor-pointer'/>
        </Link>
      </div>

      <div className="flex-none sm:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>

      <div className="flex-none font-poppins font-medium hidden lg:block">
        <div className="flex flex-row">
        <Link href="/">
          <a className="text-lg px-5 tracking-wider hover:font-semibold duration-100 uppercase">Home</a>
        </Link>
          <div className="dropdown dropdown-hover cursor-pointer">
            <label className="text-lg px-5 tracking-wider hover:font-semibold duration-100 uppercase">Project</label>
            <ul className="dropdown-content p-2 bg-white shadow w-52">
              <li className='py-2'>
                <Link href="/sakinah-residence">
                  <a className="text-base cursor-pointer hover:font-semibold duration-100">Sakinah Residence</a>
                </Link>
              </li>
              <li className='py-2'>
                <Link href="/griya-mega-sakinah">
                  <a className="text-base cursor-pointer hover:font-semibold duration-100">Griya Mega Sakinah</a>
                </Link>
              </li>
              <li className='py-2'>
                <Link href="/mutiara-sakinah">
                  <a className="text-base cursor-pointer hover:font-semibold duration-100">Mutiara Sakinah</a>
                </Link>
              </li>
            </ul>
          </div>
          <a href='#testimonials' className="text-lg px-5 tracking-wider hover:font-semibold duration-100 uppercase">About</a>
          <a href='#contacts' className="text-lg px-5 tracking-wider hover:font-semibold duration-100 uppercase">Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Nav
