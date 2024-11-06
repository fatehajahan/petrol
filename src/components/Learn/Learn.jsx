import React from 'react'
import Container from '../Container/Container'
import learn from "../../assets/learn.png"

const Learn = () => {
    return (
        <div className='bg-[#F0F0F0] md:py-[136px]'>
            <Container>
                <div className="md:flex">
                    <div className="md:w-[37%]  bg-[#F40404]">
                        <h2 className='md:w-[285px] py-[50px] px-[50px] md:py-0 md:px-0 md:pt-[100px] md:pl-[74px] md:pb-[99px] text-white md:text-[36px] text-[25px] font-bold md:text-left text-center'>Learn more about our company</h2>
                    </div>
                    <div className="image relative">
                        <img src={learn} alt="" className='md:h-[390px] h-[300px]'/>
                        <a href="#" className='md:text-base text-[12px] bg-white text-[#F40404] font-semibold py-[6px] px-[10px] md:py-[13px] md:px-[40px] absolute top-0 left-0 mt-[190px] mb-[142px] md:mx-[282px] mx-[110px] hover:bg-[#F40404] hover:text-white duration-700'>Learn More</a>
                    </div>
                </div>
            </Container>
        </div>
    )
}


//  text-white font-semibold  bg-[#F40404] hover:bg-white hover:text-black duration-700

export default Learn