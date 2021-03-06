import { ReactNode } from 'react'
import Link from 'next/link'
import { Nav } from './index'

interface LayoutProps {
  children: ReactNode;
}

const Wrapper = (props: LayoutProps) => {
  const { children } = props
  return (
    <div className="w-full drawer drawer-end text-black">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col overflow-y-hidden">
        <div className="bg-white">
            <Nav />
        </div>
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <div className="flex flex-col font-poppins font-medium p-4 overflow-y-auto w-56 bg-white">
          <Link href="/">
            <a className="text-lg py-3 tracking-wider uppercase">Home</a>
          </Link>
          <div className="collapse">
            <input type="checkbox"/>
            <div className="collapse-title text-lg py-3 tracking-wider uppercase" style={{ paddingLeft: 0 }}>
              Project
            </div>
            <ul className="collapse-content bg-white shadow">
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
          <a href='#testimonials' className="text-lg py-3 tracking-wider uppercase">About</a>
          <a href='#contacts' className="text-lg py-3 tracking-wider uppercase">Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Wrapper
