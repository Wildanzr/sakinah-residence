import { ReactNode } from 'react'
import Image from 'next/image'

import LogoSakinah from '../public/images/logo-sakinah.png'

interface LayoutProps {
  children: ReactNode;
}

const Nav = (props: LayoutProps) => {
  const { children } = props
  return (
    <div className="drawer text-black">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full flex flex-row navbar bg-white justify-between">
          <div className="flex h-12 w-28 mx-2 lg:mx-5 items-center justify-center">
            <Image src={LogoSakinah} alt="Sakinah Residence Logo" height={60}/>
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

          <div className="flex-none hidden lg:block">
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
        <ul className="flex flex-col p-4 overflow-y-auto w-40 bg-white">
          <a className="text-lg py-3 tracking-wider uppercase">Home</a>
          <a className="text-lg py-3 tracking-wider uppercase">Project</a>
          <a className="text-lg py-3 tracking-wider uppercase">About</a>
          <a className="text-lg py-3 tracking-wider uppercase">Contact</a>
        </ul>
      </div>
    </div>
  )
}

export default Nav
