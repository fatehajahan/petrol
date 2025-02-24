import React from 'react'
import Container from '../Container/Container'

const Join = () => {
    return (
        <div className='bg-[#F40404] text-white border-b-[5px] border-b-[#FFB800] py-[20px]'>
            <Container>
                <div className="flex justify-between items-center">
                    <h2 className='md:text-[36px] text-[18px] font-bold'>Want to join as member branch in your area?</h2>

                    <a href="#" className='md:text-base text-[12px] font-bold border-[2px] py-[13px] px-[10px] md:py-[14px] md:px-[31px] hover:bg-white hover:text-black duration-700'>CONTACT</a>
                </div>
            </Container>
        </div>
    )
}

export default Join