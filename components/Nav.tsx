import Image from 'next/image'

import LogoSakinah from '../public/images/logo-sakinah.png'

const Nav = () => {
  return (
    <div className="container flex flex-row navbar justify-between">
      <div className="flex h-12 w-28 mx-2 lg:mx-5 items-center justify-center">
        <Image src={LogoSakinah} alt="Sakinah Residence Logo" />
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
          <a className="text-lg px-5 tracking-wider uppercase">Home</a>
          <a className="text-lg px-5 tracking-wider uppercase">Project</a>
          <a className="text-lg px-5 tracking-wider uppercase">About</a>
          <a className="text-lg px-5 tracking-wider uppercase">Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Nav
