import React from 'react'
import one from "../../assets/one.png"
import two from "../../assets/two.png"
import three from "../../assets/three.png"
import four from "../../assets/four.png"

const PetrolImages = () => {
  return (
    <div className='md:flex justify-between gap-x-[20px] px-5 md:px-0 md:mt-[100px] mt-[5px]'>
      <img src={one} className='md:w-1/4 mt-2 md:mt-0 w-full' />
      <img src={two} className='md:w-1/4 mt-2 md:mt-0 w-full' />
      <img src={three} className='md:w-1/4 mt-2 md:mt-0 w-full' />
      <img src={four} className='md:w-1/4 mt-2 md:mt-0 w-full' />
    </div>
  )
}

export default PetrolImages