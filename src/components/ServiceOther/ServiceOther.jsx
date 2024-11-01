import React, { Children } from 'react'

const ServiceOther = ({ children }) => {
  return (
    <div className=' bg-[rgb(0,0,0,0.5)] pt-[147px] pb-[139px]'>
      <div className="text-white">{children}</div>
    </div>
  )
}

export default ServiceOther