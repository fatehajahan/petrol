import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-container mx-auto  py-4 px-5 md:px-0'>{children}</div>
  )
}

export default Container