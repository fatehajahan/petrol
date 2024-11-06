import React, { Children } from 'react'

const ServiceOther = ({ children }) => {
  return (
    <div className=' bg-[rgb(0,0,0,0.5)] md:pt-[147px] pt-[50px] pb-[50px] md:pb-[139px]'>
      <div className="text-white">{children}</div>
    </div>
  )
}

export default ServiceOther