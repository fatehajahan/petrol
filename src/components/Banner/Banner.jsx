import React from 'react'
import Container from '../Container/Container'

const Banner = () => {
    return (
        <div>
            <div className='relative bg-banner py-[60px] md:py-[257px] bg-cover bg-no-repeat bg-center'>
                <div className=" bg-[rgb(0,0,0,0.5)] w-full h-full absolute top-0 left-0"></div>
                <Container>
                    <h1 className="relative font-poppins md:text-[64px] text-[26px] text-white font-bold md:w-[842px]">We exist since 1975 on the oil and gas industry.</h1>
                    <div className="banner-btn relative mt-[31px]">
                        <a href="#" className='md:text-base text-[12px] text-white font-semibold py-[6px] px-[10px] md:py-[13px] md:px-[40px] bg-[#F40404] hover:bg-white hover:text-black duration-700'>LEARN MORE</a>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Banner