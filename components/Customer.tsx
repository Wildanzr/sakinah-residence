import { useState } from 'react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

const Customer = () => {
  const [focus, setFocus] = useState(false)
  return (
    <div className="flex flex-col container items-center justify-center text-white">
      <p className="text-3xl font-lexend tracking-widest text-center mt-10">
        OUR CUSTOMERS
      </p>
      <span
        className="text-5xl font-lexend font-bold tracking-wider text-center pt-3"
      >
        <CountUp start={focus ? 1 : 0} end={200} duration={2} redraw={true}>
            {({ countUpRef }) => (
                <VisibilitySensor onChange={(isVisible: any) => {
                  if (isVisible) { setFocus(true) }
                }}>
                    <span ref={countUpRef} />
                </VisibilitySensor>
            )}
        </CountUp>
        +
      </span>
      <p className="text-xl font-lexend tracking-widest text-center pt-2 mb-10">
        FAMILIES
      </p>
    </div>
  )
}

export default Customer
