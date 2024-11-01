import React from 'react'
import one from "../../assets/one.png"
import two from "../../assets/two.png"
import three from "../../assets/three.png"
import four from "../../assets/four.png"

const PetrolImages = () => {
  return (
    <div className='flex justify-between gap-x-[20px] mt-[100px]'>
      <img src={one} className='w-1/4' />
      <img src={two} className='w-1/4' />
      <img src={three} className='w-1/4' />
      <img src={four} className='w-1/4' />
    </div>
  )
}

export default PetrolImages