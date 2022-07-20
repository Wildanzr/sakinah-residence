import { ReactNode } from 'react'
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
        <Nav />
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

export default Wrapper
