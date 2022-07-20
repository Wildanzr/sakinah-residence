import { ReactNode } from 'react'
import Image from 'next/image'

import LogoSakinah from '../public/images/logo-sakinah.png'

interface LayoutProps {
  children: ReactNode;
}

const Nav = (props: LayoutProps) => {
  const { children } = props
  return (
    <div className="drawer drawer-end container text-black">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col overflow-y-hidden">
        <div className="w-full flex flex-row navbar bg-white justify-between">
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
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <div className="flex flex-col font-poppins font-medium p-4 overflow-y-auto w-40 bg-white">
          <a className="text-lg py-3 tracking-wider uppercase">Home</a>
          <a className="text-lg py-3 tracking-wider uppercase">Project</a>
          <a className="text-lg py-3 tracking-wider uppercase">About</a>
          <a className="text-lg py-3 tracking-wider uppercase">Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Nav
